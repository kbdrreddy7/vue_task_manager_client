<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-avatar style="border-radius:0" >
          <img :src="logo">
       </q-avatar>

        <q-toolbar-title>
         Task Manager
        </q-toolbar-title>

        <q-btn  round flat :icon="'account_circle'"  >
       
            <q-tooltip>Account</q-tooltip>

          <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable  v-ripple  :to="`/logout`"  >
                        <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
          </q-menu>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-white-1"
      :width="250"
    >
            <q-scroll-area class="fit">

      <q-list>
        <q-item-label header  class="text-grey-8"  >
         Task Status
        </q-item-label>
        <NavLink
          v-for="link in statusLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-separator />

       <q-list>
        <q-item-label header  class="text-grey-8"  >
         Task Categories  
                          <q-icon
                            :name="'add'"
                            size="sm"
                            class="float-right"
                          />
        </q-item-label>
        <NavLink
          v-for="(link,index) in categoryLinks"
          :key="`${link.title}${index}`"
          v-bind="link"
        />
      </q-list>

</q-scroll-area>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavLink from '../components/util/NavLink'

const status = [
  {
    title: 'Tasks',
    caption: 'quasar.dev',
    icon: 'event_note',
    link: 'https://quasar.dev'
  },
  {
    title: 'Completed',
    caption: 'github.com/quasarframework',
    icon: 'fact_check',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Pending',
    caption: 'chat.quasar.dev',
    icon: 'warning',//'pending_actions',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Up Coming',
    caption: 'forum.quasar.dev',
    icon: 'schedule',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Progress',
    caption: '@quasarframework',
    icon: 'today',
    link: 'https://twitter.quasar.dev'
  }
]

const categories = [
  {
    title: 'Educational',
    caption: 'quasar.dev',
    icon: 'label',
    link: 'https://quasar.dev'
  },
  {
    title: 'Games',
    caption: 'github.com/quasarframework',
     icon: 'label',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Personal',
    caption: 'chat.quasar.dev',
    icon: 'label',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Tour',
    caption: 'forum.quasar.dev',
     icon: 'label',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Programming',
    caption: '@quasarframework',
    icon: 'label',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Educational',
    caption: 'quasar.dev',
    icon: 'label',
    link: 'https://quasar.dev'
  },
  {
    title: 'Games',
    caption: 'github.com/quasarframework',
     icon: 'label',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Personal',
    caption: 'chat.quasar.dev',
    icon: 'label',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Tour',
    caption: 'forum.quasar.dev',
     icon: 'label',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Programming',
    caption: '@quasarframework',
    icon: 'label',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Educational',
    caption: 'quasar.dev',
    icon: 'label',
    link: 'https://quasar.dev'
  },
  {
    title: 'Games',
    caption: 'github.com/quasarframework',
     icon: 'label',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Personal',
    caption: 'chat.quasar.dev',
    icon: 'label',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Tour',
    caption: 'forum.quasar.dev',
     icon: 'label',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Programming',
    caption: '@quasarframework',
    icon: 'label',
    link: 'https://twitter.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { NavLink},
  data () {
    return {
       logo:require("../assets/ToDo.png"),
      leftDrawerOpen: false,
      statusLinks: status,
      categoryLinks:categories
    }
  }
}
</script>
