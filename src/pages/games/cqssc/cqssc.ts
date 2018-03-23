import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Effect} from "../../effect";
import {Config} from "../../../config/config";
import {GameconfigServiceProvider} from "../../../providers/service/games/gameconfig-service/gameconfig-service";
import {BasketServiceProvider} from "../../../providers/service/games/basket-service/basket-service";
import {BusinessTool} from "../../../providers/tools/business-tool";
import {GlobalShareProvider} from "../../../providers/global-share/global-share";

@IonicPage()
@Component({
  selector: 'page-cqssc',
  templateUrl: 'cqssc.html',
})
export class CqsscPage extends Effect {
  methodGroup: {
    a: any;
    b: any;
    c: any;
  };
  ballLabelMap = Config.ballLabelMap;

  constructor(private share: GlobalShareProvider, private util: BusinessTool, public basket: BasketServiceProvider, private gameconfigdata: GameconfigServiceProvider, public menuCtrl: MenuController, public navCtrl: NavController, public  navParams: NavParams) {
    super();
    this.share.setTimer('divTimer',800);
    this.gameconfigdata.fetchMethedsList();
    gameconfigdata.getDefaultsMethods();
    gameconfigdata.isInit = true;
    gameconfigdata.getIssues();
    basket.clearAll();
    this.menuCtrl.enable(false, 'unauthenticated');
  }

  tmpComformMethod(a, b, c) {
    this.methodGroup = {a, b, c}
  }

  logDrag() {
    this.handler();
  }

  ionViewDidLoad() {
    this.initEffect();
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'unauthenticated');
  }

  setGrounpChoose(name, arr, value) {
    this.util.daxiaodanshuangqing(arr, name, value);
  }

  comformMethod() {
    if (this.methodGroup && this.methodGroup.a && this.methodGroup.b && this.methodGroup.c) {
      this.gameconfigdata.defaultsMethodData.a = this.methodGroup.a;
      this.gameconfigdata.defaultsMethodData.b = this.methodGroup.b;
      this.gameconfigdata.defaultsMethodData.c = this.methodGroup.c;
    }
  }

  goHelpPage() {
    this.navCtrl.push("PlayHelpPage");
  }

  mindus(obj) {
    obj.mutipleAndModeObj.times--;
    obj.mutipleAndModeObj.times = Math.max(obj.mutipleAndModeObj.times, 1);
  }

  pluse(obj) {
    obj.mutipleAndModeObj.times++;
    obj.mutipleAndModeObj.times = Math.min(obj.mutipleAndModeObj.times, obj.max_multiple);
  }

  pluseOrmindusOnInput = this.debounce((obj, e) => this.pluseOrmindus(obj, e), 1000)

  pluseOrmindus(obj, e) {
    let v = +e.target.value;
    if (v <= 1) {
      obj.mutipleAndModeObj.times = 1;
    } else if (v >= obj.max_multiple) {
      obj.mutipleAndModeObj.times = obj.max_multiple;
    } else {
      obj.mutipleAndModeObj.times = v;
    }
    e.target.value = obj.mutipleAndModeObj.times;
  }

  modeChange(obj, mode) {
    if (!obj.oldmax_multiple) obj.oldmax_multiple = obj.max_multiple;
    obj.mutipleAndModeObj.mode = mode;
    obj.max_multiple = obj.oldmax_multiple / mode;
    this.restTimesWhenChangeMode(obj);
  }

  restTimesWhenChangeMode(obj) {
    if (obj.mutipleAndModeObj.times >= obj.max_multiple)
      obj.mutipleAndModeObj.times = obj.max_multiple;
  }

  messages(obj): void {
    let hasChoose = this.basket.hasChooseBall(obj.selectarea);
    if (hasChoose && (obj.count == 0)) {
      this.share.showToast(obj.bet_note, 1000);
    } else if (obj.isRedudu) {
      this.share.showToast('订单已经存在', 1000);
    } else {
      this.share.showToast('请选择注单', 1000);
    }
  }

  addBall(obj): boolean {
    let isSucess = this.basket.addDataToBasket(obj);
    if (isSucess) {
      this.clear(obj);
      this.share.showToast('注单添加成功', 1000, 'bottom');
    } else {
      this.messages(obj);
    }
    return isSucess;
  }

  goBuybasket(obj) {
    let isSucess = this.basket.addDataToBasket(obj);
    if (isSucess || this.share.basketData.length) {
      this.clear(obj);
      this.navCtrl.push("BuyBasketPage", {nav: this.navParams.get('nav')});
    } else {
      this.messages(obj);
    }
  }

  randomBall(obj) {
    this.util.findRandom(obj.name_cn, obj);
  }

  clear(obj) {
    obj.mutipleAndModeObj.times = 1;
    this.util.clearBall(obj.selectarea);
  }
}
