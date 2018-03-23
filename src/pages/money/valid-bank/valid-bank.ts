import {Component} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {BankcardService} from "../../../providers/service/fund-service/bankcard-service";
import {GlobalShareProvider} from "../../../providers/global-share/global-share";

/**
 * Generated class for the ValidBankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valid-bank',
  templateUrl: 'valid-bank.html',
})
export class ValidBankPage {
  userInput = {
    fund_password: '',
    account: '',
    account_name: ''
  }

  constructor(public share:GlobalShareProvider,public navCtrl: NavController, public bankcardService: BankcardService) {

  }

  ionViewDidLoad() {
  }


  get_id(data: Array<{ id: any, account: any }>, std: { title: any }): any {
    for (let val of data) {
      if (val.account == std.title) return val;
    }
  }

  isMathcBanckInfo(a, b): boolean {
    for (let key in a) {
      if ((a[key] != b[key])) return false;
    }
    return true;
  }

  async todoParameter() {
    let bankinfo = this.get_id(this.bankcardService.withdrawData.data.bank_cards, this.mybank);
    if (!bankinfo) {
      this.share.showAlert('',['好的'],'','请选择银行卡');
      return;
    }
    bankinfo.fund_password = this.userInput.fund_password;
    let params = {
      id: bankinfo.id,
      account: this.userInput.account,
      account_name: this.userInput.account_name,
      fund_password: this.userInput.fund_password
    }

    if (!this.isMathcBanckInfo(params, bankinfo)) {
      this.share.showAlert('',['好的'],'','输入的银行卡与输入的信息不匹配');
      return;
    }


    if (!this.isVaildedParameter(params)) return;


    let data = await  this.bankcardService.postBindCardServer();
    if (data.isSuccess) {
      this.navCtrl.push("BindBankPage");
    } else {
      this.share.showAlert('',['好的'],'',data.Msg);
    }
  }

  isVaildedParameter(params) {
    for (let key in params) {
      this.bankcardService.ValidedBankCardPParameters[key] = params[key];
      if (!params[key]) {
        this.share.showAlert('请完善资料再提交',['好的']);
        return false;
      }
    }
    return true;
  }

  mybank = {title: ''};

  showConfirm() {
    this.todoParameter();
  }

}
