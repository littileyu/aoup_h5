import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Wallet from '@/views/Wallet'
import AddCard from '@/views/AddCard'
import SubmittedReview from '@/views/SubmittedReview'
import QRcode from '@/views/QRcode'
import ManagementBankCard from '@/views/ManagementBankCard'
import Wallet1 from '@/views/Wallet1'
import Wallet2 from '@/views/Wallet2'
import Wallet3 from '@/views/Wallet3'
import Shop from '@/views/Shop'
import Withdrawals from '@/views/Withdrawals'
import SendVerificationCode from '@/views/SendVerificationCode'
import ChangePayPassword1 from '@/views/ChangePayPassword1'
import ChangePayPassword2 from '@/views/ChangePayPassword2'
import MyAgent from '@/views/MyAgent'
import MyStore from '@/views/MyStore'
import HomeLanBo from '@/views/HomeLanBo'
import EditInformation from '@/views/EditInformation'
import BankPicker from '@/components/BankPicker'
import InputPassword from '@/components/InputPassword'
import CityPicker from '@/components/CityPicker'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias:'/home',
      name: Home.name,
      component: Home
    },
    {
      path: '/login',
      name: Login.name,
      component: Login
    },
    {
      path: '/wallet',
      name: Wallet.name,
      component: Wallet
    },
    {
      path: '/AddCard',
      name: AddCard.name,
      component: AddCard
    },
    {
      path: '/SubmittedReview',
      name: SubmittedReview.name,
      component: SubmittedReview
    },
    {
      path: '/QRcode',
      name: QRcode.name,
      component: QRcode
    },
    {
      path: '/ManagementBankCard',
      name: ManagementBankCard.name,
      component: ManagementBankCard
    },
    {
      path: '/Wallet1',
      name: Wallet1.name,
      component: Wallet1
    },
    {
      path: '/Wallet2',
      name: Wallet2.name,
      component: Wallet2
    },
    {
      path: '/Wallet3',
      name: Wallet3.name,
      component: Wallet3
    },
    {
      path: '/Shop',
      name: Shop.name,
      component: Shop
    },
    {
      path: '/Withdrawals',
      name: Withdrawals.name,
      component: Withdrawals
    },
    {
      path: '/SendVerificationCode',
      name: SendVerificationCode.name,
      component: SendVerificationCode
    },
    {
      path: '/ChangePayPassword1',
      name: ChangePayPassword1.name,
      component: ChangePayPassword1
    },
    {
      path: '/ChangePayPassword2',
      name: ChangePayPassword2.name,
      component: ChangePayPassword2
    },
    {
      path: '/MyAgent',
      name: MyAgent.name,
      component: MyAgent
    },
    {
      path: '/EditInformation',
      name: EditInformation.name,
      component: EditInformation
    },
    {
      path: '/BankPicker',
      name: BankPicker.name,
      component: BankPicker
    },
    {
      path: '/MyStore',
      name: MyStore.name,
      component: MyStore
    },
    {
      path: '/HomeLanBo',
      name: HomeLanBo.name,
      component: HomeLanBo
    },
    {
      path: '/InputPassword',
      name: InputPassword.name,
      component: InputPassword
    },
    {
      path: '/CityPicker',
      name: CityPicker.name,
      component: CityPicker
    }
  ]
})
