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
import { RouterLink } from "vue-router";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
          },
        },
        () => "首页"
      ),
    key: "home",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "homeHellData",
              },
            },
            () => "地府大数据"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "lifeDeathBookUserManage",
              },
            },
            () => "用户管理"
          ),
        key: "life_death_book_user_manage",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "lifeDeathBookDataManage",
              },
            },
            () => "数据同步"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "seductiveManageManager",
              },
            },
            () => "勾魂使者"
          ),
        key: "seductive_manage_manager",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "seductiveManageData",
              },
            },
            () => "勾魂数据"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "hellTrialTen",
              },
            },
            () => "十殿"
          ),
        key: "hell_trial_ten",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "hellTrialHistory",
              },
            },
            () => "审判记录"
          ),
        key: "hell_trial_history",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "hellTrialData",
              },
            },
            () => "数据同步"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "eighteenHellDeviceManage",
              },
            },
            () => "设备管理"
          ),
        key: "eighteen_hell_device_manage",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "eighteenHellWorkProcess",
              },
            },
            () => "作业流程"
          ),
        key: "eighteen_hell_work_process",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "eighteenHellData",
              },
            },
            () => "地狱数据"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "reincarnationDisk",
              },
            },
            () => "轮回盘"
          ),
        key: "reincarnation_disk",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "reincarnationHistory",
              },
            },
            () => "轮回记录"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "moneyTransfer",
              },
            },
            () => "汇款"
          ),
        key: "money_transfer",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "moneyManage",
              },
            },
            () => "汇款管理"
          ),
        key: "money_manage",
      },
    ],
    icon: renderIcon(LogoYen),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "logManage",
          },
        },
        () => "日志管理"
      ),
    key: "log_manage",
    icon: renderIcon(BowlingBallOutline),
  },
  {
    label: "角色权限",
    key: "role_permission",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "roleManage",
              },
            },
            () => "角色管理"
          ),
        key: "role_manage",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "permissionSetting",
              },
            },
            () => "权限设置"
          ),
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "systemManager",
              },
            },
            () => "管理员"
          ),
        key: "system_manager",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "systemSetting",
              },
            },
            () => "系统设置"
          ),
        key: "system_setting",
      },
    ],
    icon: renderIcon(ConstructOutline),
  },
];
