import $ from 'jquery';
import * as cyfs from '../cyfs_sdk/cyfs'
let QRCode = require('qrcode')
import { toast } from './lib/toast.min'
import { ObjectUtil, formatDate, LANGUAGESTYPE, castToLocalUnit } from './lib/util'
import { getCountryList } from './lib/WorldArea'

let g_mnemonicList:string[] = [];
let g_areaList: {
    id:string,
    cname:string,
    name:string,
    states:{
        id:string,
        cname:string,
        name:string,
        cities:{
            id:string,
            cname:string,
            name:string,
        }[]
    }[]
}[] = [];
let g_ip:string = '';
let g_token:string = '';
let g_isCallArea:boolean = false;
let g_country:string = '';
let g_state:string = '';
let g_city:string = '';
let g_didName:string = '';
let g_oodName:string = '';
let g_peopleInfo:{
    objectId: cyfs.ObjectId,
    object: cyfs.People,
    privateKey: cyfs.PrivateKey,
    path: string
};

if (window.location.search.split("?")[1]) {
    let str = window.location.search.split("?")[1];
    let arr = str.split('&');
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].indexOf('=') > -1 && arr[i].split('=')[1] && arr[i].split('=')[0] == 'accessToken') {
                g_token = arr[i].split('=')[1];
            }
            if (arr[i].indexOf('=') > -1 && arr[i].split('=')[1] && arr[i].split('=')[0] == 'ip') {
                g_ip = arr[i].split('=')[1];
            }
        }
    }
}

$(async function(){
    if(LANGUAGESTYPE == 'zh'){
        $('title').html('创建DID');
    }else{
        $('title').html('Build DID');
    }
});

// header render
ObjectUtil.renderHeaderInfo();

$('.app_header_box').on('click', '.people_head_sculpture', function () {
    window.location.href = 'cyfs://static/info.html';
})

class BuildDid {
    m_sharedStatck: cyfs.SharedCyfsStack;
    m_router: cyfs.NONRequestor;
    m_util_service: cyfs.UtilRequestor;
  
    constructor() {
      this.m_sharedStatck = cyfs.SharedCyfsStack.open_runtime();
      this.m_router = this.m_sharedStatck.non_service();
      this.m_util_service = this.m_sharedStatck.util();
    }

    async createMnemonic () {
        let mnemonic = cyfs.bip39.generateMnemonic(128, undefined, cyfs.bip39.wordlists.english)
        console.origin.log("gen mnemonic:", mnemonic);
        let mnemonicList:string[] = [];
        if(mnemonic){
            mnemonicList = mnemonic.split(" ");
            console.origin.log("gen mnemonicList:", mnemonicList);
        }
        return mnemonicList;
    }

    async getAreaList () {
        g_areaList = await getCountryList(LANGUAGESTYPE);
        console.origin.log("g_areaList:", g_areaList);
    }

    async RenderArea () {
        if(!g_areaList.length){
            await this.getAreaList();
        }
        let countryHtml:string = '';
        let stateHtml:string = '';
        let cityHtml:string = '';
        g_areaList.forEach((area, index)=>{
            countryHtml += `<option value="${area.id}">${LANGUAGESTYPE == 'zh'?area.cname:area.name}</option>`;
            if(index === 0){
                for (let i = 0; i < area.states.length; i++) {
                    const element = area.states[i];
                    stateHtml += `<option value="${element.id}">${LANGUAGESTYPE == 'zh'?element.cname:element.name}</option>`;
                    if(i === 0){
                        for (let k = 0; k < element.cities.length; k++) {
                            const city = element.cities[k];
                            cityHtml += `<option value="${city.id}">${LANGUAGESTYPE == 'zh'?city.cname:city.name}</option>`;
                        }
                    }
                }
            }
        })
        $('#country_select').html(countryHtml);
        $('#state_select').html(stateHtml);
        $('#city_select').html(cityHtml);
    }

    async createPeople(info: {area: cyfs.Area,mnemonic: string,network: cyfs.CyfsChainNetwork,address_index: number,name?: string,icon?: cyfs.FileId}){
        let gen = cyfs.CyfsSeedKeyBip.from_mnemonic(info.mnemonic);
        if (gen.err) {
            return gen;
        }
        let path = cyfs.CyfsChainBipPath.new_people(info.network,info.address_index);
        let private_key_r = gen.unwrap().sub_key(path);
        if (private_key_r.err) {
            return private_key_r;
        }
        let private_key = private_key_r.unwrap();
        let people = cyfs.People.create(cyfs.None, [], private_key.public(), cyfs.Some(info.area), info.name, info.icon, (build) => {
            build.no_create_time()
        });
        let sign_ret = cyfs.sign_and_set_named_object(private_key, people, new cyfs.SignatureRefIndex(0));
        if (sign_ret.err) {
            return sign_ret;
        }
        let people_id = people.desc().calculate_id();
        return {
            objectId: people_id,
            object: people,
            privateKey: private_key,
            path: path.to_string()
        };
    }

    async createDevice(info:{
        unique_id: string,
        owner: cyfs.ObjectId,
        owner_private: cyfs.PrivateKey,
        area: cyfs.Area,
        network: cyfs.CyfsChainNetwork,
        address_index: number,
        account: number,
        nick_name: string,
    category: cyfs.DeviceCategory}){
        let gen = cyfs.CyfsSeedKeyBip.from_private_key(info.owner_private.to_vec().unwrap().toHex(), info.owner.to_base_58());
        let path = cyfs.CyfsChainBipPath.new_device(
            info.account,
            info.network,
            info.address_index,
        );
        let private_key_r = gen.unwrap().sub_key(path);
        if (private_key_r.err) {
            return private_key_r;
        }
        let private_key = private_key_r.unwrap()

        let unique = cyfs.UniqueId.copy_from_slice(str2array(info.unique_id));
        console.info(`unique_str: ${info.unique_id} -> ${unique.as_slice().toHex()}`);

        let device = cyfs.Device.create(
            cyfs.Some(info.owner),
            unique,
            [],
            [],
            [],
            private_key.public(),
            info.area,
            info.category,
            (builder) => {
                builder.no_create_time();
            }
        );
        device.set_name(info.nick_name)
        let device_id = device.desc().calculate_id();
    
        console.log("create_device", device_id.to_base_58());
        let sign_ret = cyfs.sign_and_set_named_object(info.owner_private, device, new cyfs.SignatureRefIndex(0))
        if (sign_ret.err) {
            return sign_ret;
        }
    }

}

function str2array(str: string): Uint8Array {
    let out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; ++i) {
        out[i] = str.charCodeAt(i);
    }
    return out;
}


$('#country_select').on('change', function () {
    let country = $(this).val();
    let stateHtml:string = '';
    let cityHtml:string = '';
    g_areaList.forEach((area, index)=>{
        if(country === area.id){
            for (let i = 0; i < area.states.length; i++) {
                const element = area.states[i];
                stateHtml += `<option value="${element.id}">${LANGUAGESTYPE == 'zh'?element.cname:element.name}</option>`;
                if(i === 0){
                    for (let k = 0; k < element.cities.length; k++) {
                        const city = element.cities[k];
                        cityHtml += `<option value="${city.id}">${LANGUAGESTYPE == 'zh'?city.cname:city.name}</option>`;
                    }
                }
            }
        }
    })
    $('#state_select').html(stateHtml);
    $('#city_select').html(cityHtml);
})

$('#state_select').on('change', function () {
    let country = $('#country_select').val();
    let state = $(this).val();
    let cityHtml:string = '';
    g_areaList.forEach((area, index)=>{
        if(country === area.id){
            for (let i = 0; i < area.states.length; i++) {
                const element = area.states[i];
                if(state === element.id){
                    for (let k = 0; k < element.cities.length; k++) {
                        const city = element.cities[k];
                        cityHtml += `<option value="${city.id}">${LANGUAGESTYPE == 'zh'?city.cname:city.name}</option>`;
                    }
                }
            }
        }
    })
    $('#city_select').html(cityHtml);
})

function lenghtstr(str:string){
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
}

let buildDid = new BuildDid();
buildDid.getAreaList();

if(g_token && g_ip){
    $('.create_did_step_one_box').css('display', 'none');
    $('.create_did_step_two_box, .create_did_step_two').css('display', 'block');
    buildDid.RenderArea();
}

$('.cover_box').on('click', '.close_cover_i, .did_warn_btn_no', function () {
    $('.cover_box').css('display', 'none');
})

$('.cover_box').on('click', '.close_cover_i, .did_warn_btn_yes', function () {
    $('.cover_box, .did_mnemonic_create').css('display', 'none');
    $('.did_mnemonic_choose').css('display', 'block');
    let mnemonicHtml:string = '';
    g_mnemonicList.forEach(mnemonic=>{
        mnemonicHtml += `<span>${mnemonic}</span>`;
    });
    $('.did_choose_mnemonic_container').html(mnemonicHtml);
})

$('.create_did_container').on('click', '.did_next_btn', function () {
    let last = $(this).attr('data-last');
    let next = $(this).attr('data-next');
    if(last){
        $(''+last).css('display', 'none');
    }
    if(next){
        $(''+next).css('display', 'block');
    }
})

$('.did_buy_ood_btn').on('click', async function () {
    window.location.href = 'https://vfoggie.fogworks.io/?url=cyfs://static/build_did.html&desc=#/login';
})

$('.create_did_container').on('click', '.create_mnemonic_btn', async function () {
    let didName = String($('.did_info_name').val()).trim() || '';
    let oodName = String($('.did_info_ood_name').val()).trim() || '';
    console.origin.log('------didName, oodName',didName, oodName)
    if(!didName || !oodName){
        toast({
            message: LANGUAGESTYPE == 'zh'?"信息没有填写完成": 'The information is not completed.',
            time: 1500,
            type: 'warn'
        });
        return;
    }
    if(didName && lenghtstr(didName) > 16){
        toast({
            message: LANGUAGESTYPE == 'zh'?"名称不可以超过16个字符": 'Nickname cannot exceed 16 characters.',
            time: 1500,
            type: 'warn'
        });
        return;
    }
    g_didName = didName;
    g_oodName = oodName;
    $('.create_did_step_two').css('display', 'none');
    $('.did_mnemonic_create_box').css('display', 'block');
    g_country = String($('#country_select').val()) || '';
    g_state = String($('#state_select').val()) || '';
    g_city = String($('#city_select').val()) || '';
    console.log("----g_country, g_state, g_city:", g_country, g_state, g_city);
    let mnemonicList:string[] = await buildDid.createMnemonic();
    let mnemonicHtml:string = '';
    mnemonicList.forEach(mnemonic=>{
        mnemonicHtml += `<span>${mnemonic}</span>`;
    });
    $('.did_create_mnemonic_box_show').html(mnemonicHtml);
    g_mnemonicList = mnemonicList.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
    console.origin.log("gen g_mnemonicList:", g_mnemonicList);
})

$('.did_choose_mnemonic_container').on('click', 'span', function () {
    $(this).remove();
    let mnemonicHtml = `<span>${$(this).html() }</span>`;
    $('.did_choose_mnemonic_box').append(mnemonicHtml);
})

$('.did_choose_mnemonic_box').on('click', 'span', function () {
    $(this).remove();
    let mnemonicHtml = `<span>${$(this).html()}</span>`;
    $('.did_choose_mnemonic_container').append(mnemonicHtml);
})

function _hashCode(strValue: string): number {
    let hash = 0;
    for (let i = 0; i < strValue.length; i++) {
        let chr = strValue.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }

    hash = Math.floor(Math.abs(hash) / 63336);

    return hash;
}


function _calcIndex(uniqueStr: string): number {

    // 示例用了cyfs sdk依赖的node-forge库进行计算
    const md5 = cyfs.forge.md.md5.create();
    md5.update(uniqueStr, 'utf8')
    let result = cyfs.forge.util.binary.hex.encode(md5.digest())
    let index = _hashCode(result);

    console.log(`calc init index: uniqueStr=${uniqueStr}, index=${index}`);

    return index
}


$('.did_verify_btn').on('click', async function () {
    let mnemonic_Container = $('.did_choose_mnemonic_container').html();
    console.origin.log("mnemonic_Container:", mnemonic_Container);
    if(mnemonic_Container){
        toast({
            message: LANGUAGESTYPE == 'zh'?"还有助记词没有选择": 'There is no choice for mnemonics',
            time: 1500,
            type: 'warn'
        });
        return;
    }
    let mnemonicString = $('.did_choose_mnemonic_box').html();
    var reg = new RegExp("<span>","g");
    var reg2 = new RegExp("</span>","g");
    let mnemonicStr = mnemonicString.replace(reg,"").replace(reg2," ");
    console.origin.log("mnemonicStr:", mnemonicStr);
    // let peopleRet = await buildDid.createPeople({area: cyfs.Area.from_str(`${g_country}:${g_state}:${g_city}`),mnemonic: mnemonicStr, network: cyfs.get_current_network(),address_index: 0,name: g_didName});
    let peopleRet = await buildDid.createPeople({area: cyfs.Area.from_str(`${g_country}:${g_state}:${g_city}`).unwrap(),mnemonic: mnemonicStr, network: cyfs.CyfsChainNetwork.Test,address_index: 0,name: g_didName});
    console.origin.log("peopleRet:", peopleRet);
    if(!peopleRet.err){
        g_peopleInfo = peopleRet;
        $('.did_mnemonic_choose').css('display', 'none');
        $('.did_create_success').css('display', 'block');
    }else{
        toast({
            message: LANGUAGESTYPE == 'zh'?"创建people失败": 'Failed to create people',
            time: 1500,
            type: 'warn'
        });
    }
})

$('.did_success_next_btn').on('click', async function () {
        let deviceRet = await buildDid.createDevice({unique_id: g_ip,
            owner: g_peopleInfo.objectId,
            owner_private: g_peopleInfo.privateKey,
            area: cyfs.Area.from_str(`${g_country}:${g_state}:${g_city}`).unwrap(),
            network: cyfs.CyfsChainNetwork.Test,
            address_index: 0,
            account:_calcIndex(g_ip),
            nick_name: g_oodName,
            category: cyfs.DeviceCategory.OOD
        });
        if(deviceRet.err){
            toast({
                message: LANGUAGESTYPE == 'zh'?"绑定失败": 'Binding failed',
                time: 1500,
                type: 'warn'
            });
        }else{
            $('.create_did_step_two').css('display', 'none');
            $('.create_did_step_three_box').css('display', 'block');
        }
})

