import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// route-level code splitting
// const createListView = id => () => import('../pages/CreateListView').then(m => m.default(id))
const Index = () => import('../pages/index.vue');
const Button = () => import('../pages/button.vue');
const Icon = () => import('../pages/icon.vue');
const Grid = () => import('../pages/grid.vue');
const Layout = () => import('../pages/layout.vue');
const Card = () => import('../pages/card.vue');
const Collapse = () => import('../pages/collapse.vue');
const Split = () => import('../pages/split.vue');
const Divider = () => import('../pages/divider.vue');
const Cell = () => import('../pages/cell.vue');
const Menu = () => import('../pages/menu.vue');
const Tabs = () => import('../pages/tabs.vue');
const Dropdown = () => import('../pages/dropdown.vue');
const Page = () => import('../pages/page.vue');
const Breadcrumb = () => import('../pages/breadcrumb.vue');
const Badge = () => import('../pages/badge.vue');
const Anchor = () => import('../pages/badge.vue');
const Steps = () => import('../pages/steps.vue');
const LoadingBar = () => import('../pages/badge.vue'); // TODO
const Input = () => import('../pages/input.vue');
const Radio = () => import('../pages/radio.vue');
const Checkbox = () => import('../pages/checkbox.vue');
const Switch = () => import('../pages/switch.vue');
const Table = () => import('../pages/table.vue');
const Select = () => import('../pages/select.vue');
const AutoComplete = () => import('../pages/auto-complete.vue');
const Slider = () => import('../pages/slider.vue');
const DatePicker = () => import('../pages/date-picker.vue');
const TimePicker = () => import('../pages/time-picker.vue');
const Cascader = () => import('../pages/cascader.vue');
const Transfer = () => import('../pages/transfer.vue');
const InputNumber = () => import('../pages/input-number.vue');
const Rate = () => import('../pages/rate.vue');
const Upload = () => import('../pages/upload.vue');
const ColorPicker = () => import('../pages/color-picker.vue');
const Form = () => import('../pages/form.vue');
const Alert = () => import('../pages/alert.vue');
const Message = () => import('../pages/message.vue');
const Notice = () => import('../pages/notice.vue');
const Modal = () => import('../pages/modal.vue');
const Drawer = () => import('../pages/drawer.vue');
const Tree = () => import('../pages/tree.vue');
const Tooltip = () => import('../pages/tooltip.vue');
const Poptip = () => import('../pages/poptip.vue');
const Progress = () => import('../pages/progress.vue');
const Avatar = () => import('../pages/avatar.vue');
const Tag = () => import('../pages/tag.vue');
const Carousel = () => import('../pages/carousel.vue');
const Timeline = () => import('../pages/timeline.vue');
const Time = () => import('../pages/time.vue');
const Circle = () => import('../pages/circle.vue');
const Affix = () => import('../pages/affix.vue');
const BackTop = () => import('../pages/back-top.vue');
const Spin = () => import('../pages/spin.vue');
const Scroll = () => import('../pages/scroll.vue');

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/button', component: Button},
      {path: '/icon', component: Icon},
      {path: '/grid', component: Grid},
      {path: '/layout', component: Layout},
      {path: '/card', component: Card},
      {path: '/collapse', component: Collapse},
      {path: '/split', component: Split},
      {path: '/divider', component: Divider},
      {path: '/cell', component: Cell},
      {path: '/menu', component: Menu},
      {path: '/tabs', component: Tabs},
      {path: '/dropdown', component: Dropdown},
      {path: '/page', component: Page},
      {path: '/breadcrumb', component: Breadcrumb},
      {path: '/badge', component: Badge},
      {path: '/steps', component: Steps},
      {path: '/anchor', component: Anchor},
      {path: '/loadingBar', component: LoadingBar},
      {path: '/input', component: Input},
      {path: '/radio', component: Radio},
      {path: '/checkbox', component: Checkbox},
      {path: '/switch', component: Switch},
      {path: '/table', component: Table},
      {path: '/select', component: Select},
      {path: '/autoComplete', component: AutoComplete},
      {path: '/slider', component: Slider},
      {path: '/datePicker', component: DatePicker},
      {path: '/timePicker', component: TimePicker},
      {path: '/cascader', component: Cascader},
      {path: '/transfer', component: Transfer},
      {path: '/inputNumber', component: InputNumber},
      {path: '/rate', component: Rate},
      {path: '/upload', component: Upload},
      {path: '/colorPicker', component: ColorPicker},
      {path: '/form', component: Form},
      {path: '/alert', component: Alert},
      {path: '/message', component: Message},
      {path: '/notice', component: Notice},
      {path: '/modal', component: Modal},
      {path: '/drawer', component: Drawer},
      {path: '/tree', component: Tree},
      {path: '/tooltip', component: Tooltip},
      {path: '/poptip', component: Poptip},
      {path: '/progress', component: Progress},
      {path: '/avatar', component: Avatar},
      {path: '/tag', component: Tag},
      {path: '/carousel', component: Carousel},
      {path: '/timeline', component: Timeline},
      {path: '/time', component: Time},
      {path: '/circle', component: Circle},
      {path: '/affix', component: Affix},
      {path: '/backTop', component: BackTop},
      {path: '/spin', component: Spin},
      {path: '/scroll', component: Scroll},
      {path: '/', component: Index}
    ]
  })
}
