import $ from 'jquery';
import * as cyfs from '../../cyfs_sdk/cyfs'
import { toast } from '../lib/toast.min'
import { ObjectUtil, formatDate, LANGUAGESTYPE } from '../lib/util'
import { isBind, AppUtil, AppDetailUtil } from './app_util'

let g_isBind:boolean;

$(async function(){
    if(LANGUAGESTYPE == 'zh'){
      $('title').html('应用商店');
    }else{
      $('title').html('Dec App Store');
    }
    g_isBind = await isBind();
    if(!g_isBind){
      window.location.href = 'cyfs://static/browser.html';
    }
});

let g_appList:{ app_id: cyfs.ObjectId | string, app_name: string, app_icon: string, fidArray: { fid: cyfs.ObjectId, version: string }[], owner: cyfs.ObjectId | undefined, app: cyfs.DecApp }[] = [];

class AppStoreListClass {
    m_sharedStatck: cyfs.SharedCyfsStack;
    m_util_service: cyfs.UtilRequestor;
    m_router: cyfs.NONRequestor;

    constructor() {
        this.m_sharedStatck = cyfs.SharedCyfsStack.open_runtime();
        this.m_router = this.m_sharedStatck.non_service();
        this.m_util_service = this.m_sharedStatck.util();
    }

    //app store list
    async getAllAppList() {
      let r = await AppUtil.getAllAppListFun();
      console.origin.log('-------------r', r)
      if (r.err) {
          $('.app_list_box').html(LANGUAGESTYPE == 'zh'? '无' : 'None');
      } else {
          let storeList = r.app_list().array();
          console.origin.log('storeList', storeList)
          if (storeList && storeList.length) {
              console.log('--------------------------rstore_list', storeList)
              let storeHtml = "";
              let timeArr:number[] = [];
              for (let i = 0; i < storeList.length; i++) {
                  if (storeList[i]) {
                      console.log('--------------------element', i, storeList[i], storeList[i].object_id)
                      let app = await AppUtil.showApp(storeList[i].object_id, false);
                      console.origin.log('------------------------------app', app)
                      let sortIndex = 0;
                      let isfirstSort = true;
                      timeArr.forEach((time, index)=>{
                        if(isfirstSort && time > app.app.body().unwrap().update_time()){
                          isfirstSort = false;
                          sortIndex = index - 1;
                        }
                        if((index == timeArr.length - 1) && isfirstSort){
                          isfirstSort = false;
                          sortIndex = index + 1;
                        }
                      })
                      if(sortIndex < 0){
                        sortIndex = 0;
                      }
                      timeArr.splice(sortIndex, 0, app.app.body().unwrap().update_time());
                      g_appList.splice(sortIndex, 0, app);
                      console.origin.log('------------------------------timeArr', timeArr)
                      console.origin.log('------------------------------app_name', app.app_name, app.app.body().unwrap().update_time().toString(), sortIndex)
                      let appBody = app.app.body().unwrap();
                      let app_introduce = LANGUAGESTYPE == 'zh'? '暂未介绍' : 'No introduction yet';
                      if (appBody.content().desc.is_some()) {
                          app_introduce = appBody.content().desc.unwrap().toString();
                      }
                      let tagsHtml = '';
                      let appExtId = await cyfs.AppExtInfo.getExtId(app.app);
                      console.log('appExtId:', appExtId);
                      let appExt = await ObjectUtil.getObject({id:appExtId, decoder:new cyfs.AppExtInfoDecoder, flags: 1});
                      console.log('appExt:', appExt);
                      if (!appExt.err) {
                        if (appExt[0]) {
                          let info = JSON.parse(appExt[0].info());
                          console.origin.log('appExt-info', app.app_name, info);
                          if (info && info['cyfs-app-store']){
                            if(info['cyfs-app-store'].tag){
                                let tags = info['cyfs-app-store'].tag;
                                tags.forEach(tag => {
                                  tagsHtml += `<a href="cyfs://static/DecAppStore/app_tag.html?tag=${tag}" target="_blank"># ${tag}</a>`;
                                });
                            }
                          }
                        }
                      }
                      storeHtml =  `<li>
                                      <div class="app_list_info">
                                        <div class="app_list_info_l" data-id="${app.app_id}">
                                          <img src="${app.app_icon || '../img/appmanager/app_default.svg'}" onerror="this.src='../img/appmanager/app_default.svg';this.οnerrοr=null" alt="">
                                        </div>
                                        <div class="app_list_info_r">
                                          <p class="app_list_info_title" data-id="${app.app_id}">${ app.app_name}</p>
                                          <p class="app_list_info_subtitle">${app_introduce}</p>
                                        </div>
                                      </div>
                                      <div class="app_list_extra_info">
                                        <div class="app_list_extra_info_l">${tagsHtml}</div>
                                        <div class="app_list_extra_info_r"></div>
                                      </div>
                                    </li>`;
                      if(sortIndex == 0){
                        $('.app_list_box').prepend(storeHtml);
                      }else{
                        $('.app_list_box li').eq(sortIndex-1).after(storeHtml);
                      }
                  }
              }

          }
      }
      console.origin.log('------------------------------g_appList', g_appList)
    }

}

export const AppStoreList = new AppStoreListClass;
AppStoreList.getAllAppList();


// open app detail
$('.app_list_box').on('click', '.app_list_info_l, .app_list_info_title', function () {
  let id = $(this).attr('data-id');
  window.open('cyfs://static/DecAppStore/app_detail.html?id=' + id);
})

// open install app pop
$('.open_install_app_btn').on('click', function () {
    $('.app_cover_box .app_cover_input').val('');
    $('.app_cover_box').css('display', 'block');
})

// close install app pop
$('.app_cover_box').on('click', '.app_cover_close_i', function () {
    $('.app_cover_box').css('display', 'none');
})

$('.app_upload_btn').on('click', function () {
  window.location.href = 'cyfs://static/DecAppStore/upload_dec_app.html';
})

// add app
$('.app_cover_box').on('click', '.app_cover_input_btn', function () {
    let coverInput:string = $('.app_cover_input ').val()?.toString() || '';
    console.log('coverInput.indexOf("cyfs://")', coverInput.indexOf("cyfs://"))
    if (coverInput.indexOf("cyfs://") == 0) {
      let txt = coverInput.replace('cyfs:/', 'http://127.0.0.1:38090');
      AppDetailUtil.getObjectId(txt);
      $('.app_cover_box').css('display', 'none');
      $('#cover_input').val("");
    } else {
      toast({
        message: LANGUAGESTYPE == 'zh'? '应用不存在': 'The Dec App does not exist.',
        time: 1500,
        type: 'warn'
      });
    }
})

$('.app_header_box').on('click', '.people_head_sculpture', function () {
  window.location.href = 'cyfs://static/info.html';
})


