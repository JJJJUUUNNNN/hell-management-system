import type { MenuOption } from "naive-ui";
import { NIcon } from "naive-ui";
import {
  HomeOutline,
  BookOutline,
  SettingsOutline,
  HandLeftOutline,
  FitnessOutline,
  SyncCircleOutline,
  BowlingBallOutline,
  BuildOutline,
  LogoYen,
  ConstructOutline,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export const menuOptions: MenuOption[] = [
  {
    label: "首页",
    key: "home",
    children: [
      {
        label: "地府大数据",
        key: "home_hell_data",
      },
    ],
    icon: renderIcon(HomeOutline),
  },
  {
    label: "生死簿",
    key: "life_death_book",
    children: [
      {
        label: "用户管理",
        key: "life_death_book_user_manage",
      },
      {
        label: "数据同步",
        key: "life_death_book_data_manage",
      },
    ],
    icon: renderIcon(BookOutline),
  },
  {
    label: "勾魂管理",
    key: "seductive_manage",
    children: [
      {
        label: "勾魂使者",
        key: "seductive_manage_manager",
      },
      {
        label: "勾魂数据",
        key: "seductive_manage_data",
      },
    ],
    icon: renderIcon(SettingsOutline),
  },
  {
    label: "阎王殿审判",
    key: "hell_trial",
    children: [
      {
        label: "十殿",
        key: "hell_trial_ten",
      },
      {
        label: "审判记录",
        key: "hell_trial_history",
      },
      {
        label: "数据同步",
        key: "hell_trial_data",
      },
    ],
    icon: renderIcon(HandLeftOutline),
  },
  {
    label: "十八层地狱",
    key: "eighteen_hell",
    children: [
      {
        label: "设备管理",
        key: "eighteen_hell_device_manage",
      },
      {
        label: "作业流程",
        key: "eighteen_hell_work_process",
      },
      {
        label: "地狱数据",
        key: "eighteen_hell_data",
      },
    ],
    icon: renderIcon(FitnessOutline),
  },
  {
    label: "六道轮回",
    key: "reincarnation",
    children: [
      {
        label: "轮回盘",
        key: "reincarnation_disk",
      },
      {
        label: "轮回记录",
        key: "reincarnation_history",
      },
    ],
    icon: renderIcon(SyncCircleOutline),
  },
  {
    label: "冥币管理",
    key: "money",
    children: [
      {
        label: "汇款",
        key: "money_transfer",
      },
      {
        label: "汇款管理",
        key: "money_manage",
      },
    ],
    icon: renderIcon(LogoYen),
  },
  {
    label: "日志管理",
    key: "log_manage",
    icon: renderIcon(BowlingBallOutline),
  },
  {
    label: "角色权限",
    key: "role_permission",
    children: [
      {
        label: "角色管理",
        key: "role_manage",
      },
      {
        label: "权限设置",
        key: "permission_setting",
      },
    ],
    icon: renderIcon(BuildOutline),
  },
  {
    label: "系统管理",
    key: "system_manage",
    children: [
      {
        label: "管理员",
        key: "system_manager",
      },
      {
        label: "系统设置",
        key: "system_setting",
      },
    ],
    icon: renderIcon(ConstructOutline),
  },
];
