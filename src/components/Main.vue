<template>
  <div class="container">
    <div class="left">
      <div
        style="height: calc(15rem * 0.6); background-color: white; width: 100%; display: flex; align-items: center; justify-content: center">
        <img src="https://www.gin-vue-admin.com/img/logo.png" style="width: 5rem; height: 5rem">
        <span style="font-size: 2.5rem; margin-left: 8px">模版工程</span>
      </div>
      <div style="height: calc(100vh - (15rem * 0.6)); background-color: white; overflow: auto;" class="menu">
        <div class="menu" v-for="menu in menus">
          <div @click="jump(menu)">
            <router-link v-if="menu.link != null" :to="menu.link">
              <div class="first-menu-open">
                <i :class=menu.icon></i>
                <span>{{ menu.name }}</span>
                <!--有子元素的显示展开箭头-->
                <i class="el-icon-arrow-up" style="margin-left: 25px" v-if="menu.children.length > 0"></i>
              </div>
            </router-link>
          </div>
          <div class="first-menu-open" v-if="menu.link == null" @click="openMenu(menu)">
            <i :class=menu.icon></i>
            <span>{{ menu.name }}</span>
            <!--有子元素的显示展开箭头-->
            <i class="el-icon-arrow-up" style="margin-left: 25px" v-if="menu.children.length > 0"></i>
          </div>
          <div class="second-menu-open" v-show="menu.show">
            <div class="submenu" v-for="submenu in menu.children">
              <div @click="jump(submenu)">
                <router-link :to="submenu.link">
                  <div>
                    <i :class=submenu.icon></i>
                    <span>{{ submenu.name }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <div class="header-title">
          <div class="header-title-left">
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div style="font-size: 2.5rem; width: 10rem">{{ currentMenuName }}</div>
          </div>
          <div class="header-title-right">
            <div
              style="margin-left: 15px; margin-right: 20px; display: flex; flex-direction: column; justify-content: center">
              <div style="height: 50%;">
                <el-dropdown>
                  <div>
                    <div style="display: flex; flex-direction: column; justify-content: center">
                      <el-avatar :size="35" src="https://qmplusimg.henrongyi.top/gva_header.jpg"></el-avatar>
                    </div>
                    <div style="width:auto; margin-left: 5px">
                  <span class="el-dropdown-link" style="font-size: 2rem">
                    {{ $store.getters.getUser.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    </div>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <router-link to="/logout">
                      <el-dropdown-item>登出</el-dropdown-item>
                    </router-link>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div>
              <span style="font-size: 2rem">主题</span>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
          </div>
        </div>
        <div class="header-menu"
             style="display: flex; justify-content: center; flex-direction: column; border-bottom: 1px solid #f4f4f5; border-left: 1px solid #f4f4f5">
          <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" style="height: 100%"
                   @tab-click="tabClick(editableTabsValue)">
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="main">
        <div style="height: 10px"></div>
        <div style="margin: 0px 10px;  background-color: white; border-radius: 5px; min-height: 80vh;">
          <router-view/>
        </div>
      </div>
      <div class="foot">
        <div>
          Powered by ninggelin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      // 当前菜单栏名称 head-title里面
      currentMenuName: "首页",
      // 当前tab name head-menu里面
      editableTabsValue: "首页",
      // tab历史 head-menu里面
      editableTabs: [
        {
          // 显示在页面上的名称
          title: '首页',
          // name必须唯一
          name: '首页',
          // 跳转链接
          link: '/',
        }
      ],
      // 左侧菜单栏信息 仅支持两级菜单
      menus: [
        {
          name: "首页",
          icon: "el-icon-s-home",
          show: false,
          link: "/",
          children: []
        },
        {
          name: "demo1",
          icon: "el-icon-s-home",
          show: false,
          children: [
            {
              name: "demo11",
              icon: "el-icon-s-home",
              link: "/demo11"
            },
            {
              name: "demo12",
              icon: "el-icon-s-home",
              link: "/demo12"
            },
            {
              name: "demo13",
              icon: "el-icon-s-home",
              link: "/demo13"
            }
          ]
        },
        {
          name: "demo2",
          icon: "el-icon-s-home",
          show: false,
          children: [
            {
              name: "demo21",
              icon: "el-icon-s-home",
              link: "/demo21"
            },
            {
              name: "demo22",
              icon: "el-icon-s-home",
              link: "/demo22"
            },
            {
              name: "demo23",
              icon: "el-icon-s-home",
              link: "/demo23"
            }
          ]
        },
        {
          name: "demo",
          icon: "el-icon-s-home",
          show: false,
          link: "/demo",
          children: []
        }
      ]
    }
  },
  methods: {
    // 展开or收起菜单栏
    openMenu(currentMenu) {
      this.menus.forEach(menu => {
        if (menu != currentMenu) {
          menu.show = false
        }
      })

      currentMenu.show = !currentMenu.show
    },
    // 从左侧菜单栏跳转时触发方法
    jump(menu) {
      let filterTabs = this.editableTabs.filter(tab => tab.name === menu.name)

      if (filterTabs.length == 0)
      {
        this.currentMenuName = menu.name
        this.editableTabsValue = menu.name

        this.editableTabs.push({title: menu.name, name: menu.name, link: menu.link})
        this.saveMenu()
      }
      else {
        // 已存在切换到该tab上
        this.editableTabsValue = menu.name
        this.tabClick(menu.name)
      }
    },
    // tab栏删除一个tab面板
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              // todo 偷懒一下先
              this.tabClick(activeName)
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);

      this.saveMenu();
    },
    // 点击tab栏某个tab面板
    tabClick(targetName) {
      let path;
      let name;
      this.editableTabs.forEach(tab => {
        if (tab.name == targetName) {
          path = tab.link;
          name = tab.title;
        }
      })
      this.$router.push(path)
      this.currentMenuName = name;
      this.saveMenu()

      this.menus.forEach(menu => {
        menu.show = false
        menu.children.forEach(submenu => {
          if (submenu.name === targetName)
          {
            menu.show = true
            return;
          }
        })
      })
    },
    // tab栏变更缓存
    saveMenu()
    {
      this.$store.dispatch("asyncUpdateMenu", {currentMenuName: this.currentMenuName, editableTabsValue: this.editableTabsValue,
        editableTabs: this.editableTabs})
    }
  },
  mounted() {
  },
  beforeMount() {
    console.log(this.$store.getters.getMenu)
    // 刷新页面从缓存中读取tab栏历史信息
    this.currentMenuName = this.$store.getters.getMenu.currentMenuName
    this.editableTabsValue = this.$store.getters.getMenu.editableTabsValue
    this.editableTabs = this.$store.getters.getMenu.editableTabs
  }
}
</script>

<style scoped>
@import '../style/main.css';

a {
  /*去除下滑线*/
  text-decoration: none;
  /*字体颜色*/
  color: #2c3e50;
}

a.router-link-exact-active.router-link-active {
  text-decoration: none;
  color: #409eff;
}

.el-tabs--card >>> .el-tabs__header .el-tabs__nav {
  border: 1px solid #E4E7ED;
  border-top: none;
}



/*首页tab不允许关闭 特殊处理*/
div >>> #tab-首页 {
  width: 80px;
}
div >>> #tab-首页 span {
  display: none;
}


/*修改tab栏被选中颜色*/
div >>> .el-tabs__item.is-top.is-active.is-closable {
  background-color: #f1f7ff;
}


</style>

