export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  /*
  {
    title: true,
    name: 'Cadastros'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },*//*
  {
    title: true,
    name: 'Cadastros'
  },*/

  {
    name: 'CADASTROS',
    url: '/base',
    icon: 'icon-puzzle',
    children: [



  {
    name: 'Cliente',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Novo',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Editar',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'excluir',
        url: '/base/forms',
        icon: 'icon-puzzle'
      }
    ]
  },





  {
    name: 'Produto',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Novo',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Editar',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Excluir',
        url: '/base/switches',
        icon: 'icon-puzzle'
      }
    ]
  },

]
},


  {
    divider: true
  },/*
  {
    title: true,
    name: 'Operacional'
  },*/

  {
    name: 'OPERACIONAL',
    url: '/base',
    icon: 'icon-puzzle',
    children: [

  {
    name: 'Orçamento',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Novo',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Editar',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      },
      {
        name: 'Excluir',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Pedido',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Listar',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Novo',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Editar',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Excluir',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'teste',
    url: '/charts',
    icon: 'icon-pie-chart',
   /* attributes: { disabled: true }*/
  },


  {
    name: 'Romaneio',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Listar',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Novo',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Editar',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Excluir',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },

]
},

  {
    divider: true
  },

  {
    name: 'VENDAS',
    url: '/base',
    icon: 'icon-puzzle',
    children: [


  {
    title: true,
    name: 'Vendas'
  },

  {
    name: 'Caixa',
    url: '/notifications',
    icon: 'icon-bell',
    badge: {
      variant: 'success',
      text: 'NEW'
    },
    children: [
      {
        name: 'Vender',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Abrir Caixa',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Sangria',
        url: '/notifications/modals',
        icon: 'icon-bell'
      },
      {
        name: 'Fechar Caixa',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
]
},
  {
    divider: true
  },
  {
    title: true,
    name: 'Configurações',
  },/*
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },*/
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Grupo Norba',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Grupo Norba PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
