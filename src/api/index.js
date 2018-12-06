import OrderApi from "./order";
import OrderManageApi from "./orderManage";
import ContractCenter from "./contractCenter";
import apiPublic from "./apiPublic";
import BillApi from "./bill";
import MemberApi from "./member";
import Settlement from "./settlement";
import operationsCenter from "./operationsCenter";
import OperationApi from "./operation";
import NewMain from "./newMain";
import Basic from "./basic";
import projectSetting from "./projectSetting";
import Inventory from "./inventory";
import Calculator from "./calculator";
import Smarthardware from "./smarthardware";
import Krmeeting from "./krmeeting";
import DoorRelationship from "./doorRelationship";
import KrmeetingRoom from "./krmeetingRoom";
import ProductGoods from './productGoods';
import comment from './comment';
import DevTool from './devTool';
import FinancialtransferApply from "./financialtransferApply.js";
import doorPermmision from './doorPermmision.js';
import KrmeetingSeat from "./krmeetingSeat.js";
import discountSetting from './discountSetting'
import App from "./app.js";


export default {
  ...OrderApi,
  ...OrderManageApi,
  ...ContractCenter,
  ...apiPublic,
  ...BillApi,
  ...MemberApi,
  ...Settlement,
  ...operationsCenter,
  ...OperationApi,
  ...NewMain,
  ...Basic,
  ...Calculator,
  ...projectSetting,
  ...Inventory,
  ...Smarthardware,
  ...Krmeeting,
  ...DoorRelationship,
  ...KrmeetingRoom,
  ...ProductGoods,
  ...comment,
  ...DevTool,
  ...FinancialtransferApply,
  ...doorPermmision,
  ...KrmeetingSeat,
  ...discountSetting,
  ...App
}
