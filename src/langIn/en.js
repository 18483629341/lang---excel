/**
 * 命名规范：
 * 1.全小写单词，单词间用下划线（_）分隔
 * 2.固定一级分类：
 *   - btn：按钮
 *   - common：通用
 *   - route：菜单
 *   - copyright：版权说明
 * 3.各模块独有国际化消息放在各自节点下，如用户管理模块独有国际化消息放在system.user下
 *   - system
 *     - user
 *     - privilege
 *     - organization
 *     - config
 *   - device
 *     - list
 *     - config
 *     - upgrade
 */
export default {
  // 权限树国际化
  authority: {
    alarm: {
      label: 'Alarm Management',
      record: {
        label: 'Alarm Record'
      },
      shield: {
        label: 'Alarm Shield'
      },
      switch: {
        label: 'Alarm Switch'
      }
    },
    device: {
      label: 'Device Management',
      config: {
        label: 'Device Config'
      },
      diagnose: {
        label: 'Device Diagnose'
      },
      group: {
        label: 'Device Group'
      },
      list: {
        label: 'Device List',
        add: {
          label: 'Add Device'
        },
        import: {
          label: 'Import'
        },
        export: {
          label: 'Export'
        },
        detail: {
          label: 'Detail',
          restart: {
            label: 'Restart'
          },
          reset: {
            label: 'Restore factory settings'
          }
        },
        delete: {
          label: 'Delete'
        },
        modify: {
          label: 'Modify'
        }
      },
      upgrade: {
        label: 'Device Upgrade',
        history: {
          label: 'History Record'
        },
        list: {
          label: 'Upgrade List'
        }
      }
    },
    file: {
      label: 'File Management',
      config: {
        label: 'File Config',
        remove: {
          label: 'Remove'
        },
        add: {
          label: 'Add'
        },
        modify: {
          label: 'Modify'
        }
      },
      list: {
        label: 'File List',
        re_upload: {
          label: 'Reupload'
        },
        modify: {
          label: 'Modify'
        },
        download: {
          label: 'Download'
        },
        upload: {
          label: 'Upload'
        },
        remove: {
          label: 'Remove'
        }
      }
    },
    log: {
      label: 'Log Audit',
      connection: {
        label: 'Connection Log',
        export: {
          label: 'Export'
        }
      },
      device: {
        label: 'Device Log'
      },
      login: {
        label: 'Login Log'
      },
      operation: {
        label: 'Operation Log'
      },
      system: {
        label: 'System Log'
      }
    },
    manufacture: {
      label: 'Vendor Management',
      add: {
        label: 'Add'
      },
      detail: {
        label: 'View Details'
      },
      disable: {
        label: 'Disable',
        batch: {
          label: 'Batch Disable'
        }
      },
      enable: {
        label: 'Enable',
        batch: {
          label: 'Batch Enable'
        }
      },
      modify: {
        label: 'Edit'
      },
      remove: {
        label: 'Delete'
      },
      upload: {
        label: 'Upload'
      }
    },
    monitor: {
      label: 'Device Monitor',
      history: {
        label: 'History Record'
      },
      task: {
        label: 'Monitor Task'
      }
    },
    organization: {
      label: 'Organization',
      add: {
        label: 'Add'
      },
      modify: {
        label: 'Edit'
      },
      remove: {
        label: 'Delete'
      }
    },
    privilege: {
      label: 'Authority Management',
      role: {
        add: {
          label: 'Add'
        },
        lock: {
          label: 'Lock'
        },
        modify: {
          label: 'Edit'
        },
        remove: {
          label: 'Delete'
        },
        unlock: {
          label: 'Unlock'
        }
      }
    },
    system: {
      label: 'System Management',
      // 组织机构二级菜单
      organization: {
        createOrganzation: 'Create Organzation',
        editOrganzation: 'Edit Organzation',
        organzationDetail: 'Organzation Detail'
      }
    },
    user: {
      label: 'User Management',
      add: {
        label: 'Add'
      },
      lock: {
        label: 'Lock'
      },
      modify: {
        label: 'Edit'
      },
      password: {
        reset: {
          label: 'Reset Password'
        }
      },
      remove: {
        label: 'Delete'
      },
      unlock: {
        label: 'Unlock'
      }
    },
    settings: {
      available: 'Availability Setting',
      south_file_server_address: 'Southbound file service address',
      south_file_server_address_label: 'HTTP URL, example: http://12.158.564.121:8180, download firmware upgrade equipment through the service package files, etc',
      device_batch_add: 'New equipment batch limit',
      device_batch_add_label: 'Per unit of time, after the login platform exceeds the set timeout period, the user is required to login the platform again',
      upgrade_count: 'Upgrade number limit',
      upgrade_count_label: 'Device upgrades involve large file transfers, and too many upgrades can affect platform performance',
      upgrade_overtime: 'Upgrade timeout',
      upgrade_overtime_label: 'Unit minutes. If no reply is received from the device beyond the set time, the upgrade timeout will occur and the platform can upgrade the device again',
      diagnose_overtime: 'Diagnostic timeout',
      diagnose_overtime_label: 'Unit minute. If no diagnosis is received beyond the set time, the diagnosis fails and the diagnosis can be initiated again',
      update_config_overtime: 'Modify the configuration timeout',
      update_config_overtime_label: 'Unit minutes. If no modification result is received beyond the set time, the modification is deemed to have failed and the configuration can be modified again',
      collect_log_overtime: 'Collection log timeout time',
      collect_log_overtime_label: 'If the log uploaded by the device is not received after the set time per unit minute, it shall be deemed as collection failure',
      other_operate_overtime: 'Other remote operation timeouts',
      other_operate_overtime_label: 'Units of minutes',
      command_delivery_frequency: 'Issue instruction frequency limit',
      command_delivery_frequency_label: 'Limit the number of instructions that the platform sends to a single device per second',
      command_report_frequency: 'Limit the frequency of reported messages',
      command_report_frequency_label: 'Limit the number of messages a single device can report to the platform per second. Messages from that device will no longer be processed if the frequency exceeds 50%',
      rules: {
        south_file_server_address: 'The southbound file service address cannot be empty',
        south_file_server_address_pattern: 'Allowed to enter URL address and domain name',
        device_batch_add: 'The equipment batch limit cannot be empty',
        device_batch_add_pattern: 'Range [10,5000], default 50',
        upgrade_count: 'The upgrade number limit cannot be empty',
        upgrade_count_pattern: 'Range [10,100], default 50',
        upgrade_overtime: 'The upgrade timeout period cannot be empty',
        upgrade_overtime_pattern: 'Range [10,60], default 30',
        diagnose_overtime: 'The diagnostic timeout period cannot be empty',
        diagnose_overtime_pattern: 'Range [2,15], default 5',
        update_config_overtime: 'Modify the configuration timeout time cannot be empty',
        update_config_overtime_pattern: 'Range [1,15], default 3',
        collect_log_overtime: 'The collection log timeout time cannot be empty',
        collect_log_overtime_pattern: 'Range [10,60], default 30',
        other_operate_overtime: 'The timeout period for other remote operations cannot be empty',
        other_operate_overtime_pattern: 'Range [1,15], default 3',
        command_delivery_frequency: 'The issuing frequency limit cannot be null',
        command_delivery_frequency_pattern: 'Range [1,25], default 5',
        command_report_frequency: 'The reported message frequency limit cannot be empty',
        command_report_frequency_pattern: 'Range [1,50], default 10'
      },
      safe: 'Security Setting',
      Tr069: 'TR069 Setting',
      device_online_overtime: 'Device online timeout',
      device_online_overtime_label: 'Per unit minute, the device is not connected to the platform beyond the set time, and the platform is deemed as the device is offline',
      tips: {
        configSetting: 'Set up the',
        success: 'success',
        failed: 'failed'
      },
      responseTips: {
        duplicateIP: 'Duplicate IP'
      }
    }
  },
  // Universal buttons
  btn: {
    add: 'Add',
    cancel: 'Cancel',
    confirm: 'Confirm',
    create: 'Create',
    delete: 'Delete',
    edit: 'Edit',
    lock: 'Lock',
    reset: 'Reset',
    reset_password: 'Reset Password',
    save: 'Save',
    search: 'Search',
    unlock: 'Unlock'
  },
  // 系统启动引导创建第一个管理员用户的页面
  guide: {
    welcome: 'Thank you for choosing TD-Tech IOT cloud management platform -- mCube. For safety reason, mCube will never preset any admin user. Please create an admin account first.',
    attention: 'Attention: This user will has all permissions of mCube by default. Please keep your account password safe!',
    message: {
      register_success: 'Registered successfully! Now jump to login page.'
    }
  },
  // 登录成功后进入的框架页面
  index: {
    personal_center: {
      account_detail: 'Account Details',
      isChangePassword: 'Change password or not'
    },
    modify_password: {
      current_password: 'Current Password',
      new_password: 'New Password',
      confirm_new_password: 'Confirm New Password',
      rules: {
        current_password_not_empty: 'Please input current password',
        new_password_not_empty: 'Please input new password',
        confirm_new_password_not_empty: 'Please confirm and input new password again'
      }
    }
  },
  // 路由
  route: {
    dashboard: 'Dashboard',
    system: 'System Management',
    system_user: 'User Management',
    system_auth: 'Authority Management',
    system_organization: 'Organization',
    system_settings: 'System Settings',
    vendor: 'Vendor Management',
    device: 'Device Management',
    device_list: 'Device List',
    device_details: 'Device Details',
    device_diagnose: 'Device Diagnose',
    device_group: 'Device Group',
    device_group_details: 'Device Group Details',
    device_config: 'Device Configuration',
    device_config_single: 'Single Configuration',
    device_config_template: 'Configure Template',
    device_config_file: 'Configuration File',
    device_upgrade: 'Device Upgrade',
    device_upgrade_list: 'Upgrade List',
    device_upgrade_details: 'Upgrade Details',
    device_upgrade_history: 'Upgrade History',
    application: 'App Management',
    application_market: 'App Store',
    application_deploy: 'Deployment Information',
    application_run: 'Operation Information',
    container: 'Container Management',
    container_market: 'Container Store',
    container_deploy: 'Deployment Information',
    container_run: 'Operation Information',
    monitor: 'Device Monitor',
    monitor_task: 'Monitoring',
    monitor_history: 'Monitor History',
    alarm: 'Alarm Management',
    alarm_record: 'Alarm List',
    alarm_shield: 'Alarm Shield',
    alarm_switch: 'Alarm Switch',
    file: 'File Management',
    file_list: 'File List',
    file_config: 'File Config',
    log: 'Log Audit',
    log_login: 'Login Log',
    log_operation: 'Operation Log',
    log_system: 'System Log',
    log_device: 'Device Log',
    log_connect: 'Connection Log',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    theme: 'Theme',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile'
  },
  // 系统管理一级菜单
  system: {
    // 用户管理二级菜单
    user: {
      create: 'Create User',
      delete: 'Delete User',
      email: 'Email',
      mobile: 'Mobile',
      name: 'Name',
      update: 'Modify User',
      username: 'Username',
      rules: {
        username_not_empty: 'Username required',
        username_pattern: 'Please enter 4-32 characters, letters, numbers, _, - are allowed, and must start with a letter',
        name_not_empty: 'Name required',
        name_pattern: 'Please enter 2-32 characters, allow letters, numbers, _, -, spaces and Chinese, must start with letters or Chinese',
        mobile_pattern: 'Please input correct phone number',
        email_pattern: 'Please input correct email'
      },
      tips: {
        organization: 'Please select organization',
        modify_self: 'Can not modify self information',
        reset_self_password: 'Can not reset self password',
        role: 'Please select role'
      }
    },
    // 权限管理二级菜单
    auth: {
      role: 'Role',
      preset: {
        name: 'Super Administrator Role',
        description: 'Super administrator role preset in the system, with all system permissions'
      }
    },
    // 组织机构二级菜单
    organization: {}
  },
  // --------------------------------------------------------------------------------------
  // 此分割线以上的是已整理过的国际化，以下是未整理过的国际化
  // --------------------------------------------------------------------------------------
  common: {
    create_time: 'Create time',
    description: 'Description',
    locked: 'Locked',
    normal: 'Normal',
    operation: 'Operation',
    status: 'Status',
    update_time: 'Update time',
    // -------------------------------------------------
    prompt: 'Prompt',
    warning: 'Warning',
    error: 'Error',
    addGrade: 'Add Grade',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
    confirmUpgrade: 'Confirm Upgrade',
    deviceType: 'device type',
    vendor: 'vendor',
    productModel: 'product model',
    targetVersion: 'target version',
    beforeVersion: 'before version',
    selectStart: 'start ',
    selectEnd: 'end ',
    selectRange: 'select range time',
    beginTime: 'begin time',
    finishTime: 'finish time',
    reason: 'reason',
    summary: 'summary',
    sn: 'device SN',
    tips: {
      delete_confirm: 'Are you sure to delete?',
      non_selection: 'Please select at least on record',
      conflict: {
        name: 'name conflict'
      },
      error: {
        unknown: 'unknown exception return value:'
      },
      illegal: {
        param: 'illegal request parameter'
      },
      success: {
        delete: 'deletion succeeded',
        lock: 'locked successfully',
        unlock: 'unlocked successfully'
      }
    },
    message: {
      server_exception: 'Server Exception!',
      switch_language_success: 'Switch Language Success'
    }
  },
  user: {
    password: 'password',
    headPortrits: 'headPortrits',
    updatePassword: 'Update Password',
    oldPassword: 'old password',
    newPassword: 'new password',
    checkNewPassword: 'check password',
    userForm: {
      prompt: {
        title: 'prompt box',
        resetPassword: 'Reset Password',
        onlyChooseOne: 'Please select only one row',
        cantRestMySelf: 'cant reset my own\'s password',
        resetSuccessful: 'reset password successful',
        resetFailed: 'reset password failed',
        cantModifyMyself: 'cant modify my own\'s info'
      }
    },
    rules: {
      account: {
        notEmpty: 'Username cannot be empty',
        pattern: 'Please input 4~32 characters,English letter, numbers, underline, horizontal line are' +
          ' permitted,And can only starts with English letter'
      },
      name: {
        notEmpty: 'Name cannot be empty',
        pattern: 'Please input 2~32 characters,English letter, number, underline, horizontal line, whitespace,' +
          ' chinese characters are permitted,and can only starts with English letter or chinese characters'
      },
      mobile: {
        pattern: 'Please input the correct cell phone number'
      },
      email: {
        pattern: 'Please input the correct email',
        resetFailed: 'reset password failed'
      }
    }
  },
  auth: {
    name: 'Authority',
    role: {
      selectPermissions: 'Select Authority',
      name: 'Role Name',
      description: 'Role Description',
      create: 'Add Role',
      update: 'Edit Role',
      rules: {
        name: 'Role Name cant be empty'
      },
      lock: 'Lock',
      normal: 'Normal',
      tips: {
        authority: {
          null: 'Please Select Authorities',
          changed: 'Authority has been changed,please re-select'
        },
        confirm: {
          delete: 'Are you sure to delete?',
          lock: 'Are you sure to lock?',
          unlock: 'Are you sure to unlock?'
        },
        exception: {
          deleted: 'The role has been deleted'
        },
        forbidden: {
          update: 'You have no authority to update the role',
          delete: 'Delete the selected role is not permitted',
          lock: 'Lock the selected role is not permitted',
          unlock: 'Unlock the selected role is not permitted'
        },
        success: {
          save: 'Add Role Successful'
        }
      }
    }
  },
  updatePassword: {
    rules: {
      oldPassword: {
        notEmpty: 'Old password cant be empty',
        same: 'Enter the same password as the old one'
      },
      newPassword: {
        notEmpty: 'New password cant be empty',
        pattern: 'Please enter a 6-32-bit password, which must contain upper and lower case letters, Numbers, and' +
          ' special characters (\' ~! @ # $% ^ & * () - _ = + | ({}); : "",. < > /? , the first letter must be a capital letter',
        cannotSame: 'New password and original password cannot be the same'
      },
      checkNewPassword: {
        notEmpty: 'Confirm new password cant be empty',
        cannotDiff: 'Two password inconsistencies'
      }
    },
    editSuccessAlert: {
      title: 'Edit password successful',
      confirmReLogin: 'Confirm ReLogin'
    }
  },
  organzation: {},
  device: {
    upgrade: {
      status: '升级状态',
      createUpgrade: '升级设置',
      versionBefore: '升级前软件版本',
      versionAfter: '升级软件版本',
      startTime: '发起时间',
      endTime: '完成时间',
      retry: '重试',
      setting: '设备升级设置',
      selectable: '可选升级设备',
      selected: '已选升级设备',
      append: '添加',
      remove: '移除',
      upgrade: '升级',
      deviceUpgrade: 'Device Upgrade',
      upgradeTime: 'Grade Time',
      result: 'upgrade result',
      process: 'upgrading',
      success: 'success',
      failed: 'failed',
      detail: 'upgrade detail',
      basicCondition: 'Basic Condition',
      selectDevice: 'Select Device',
      infoConfirm: 'Info Confirm',
      reminder: 'Upgrade remain: ',
      upgradeType: 'upgrade type',
      version: 'upgrade version',
      isUpgradeRegularly: 'is upgrade timing',
      basicConditionRemind: ' one batch can only be used to upgrade equipment of the same product type ',
      selectDeviceRemind: ' select upgradable device ',
      infoConfirmRemind: ' please confirm the information after the launch of an upgrade',
      modelPlaceholder: '请输入设备型号',
      selectDeviceTips: '请选择需要升级的设备',
      selectVersionTips: '请选择升级版本号',
      selectModelTips: '只能同时升级相同设备型号设备',
      selectVersion: '请选择升级版本'
    }
  },
  navbar: {
    updatePassword: 'Update Password',
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size',
    profile: 'Profile'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
    rules: {
      // 适用以下名称 角色名、组织结构名称、设备名称 、设备厂商、文件厂商
      account_notEmpty: 'please enter account name',
      input_right_account: 'please enter one right account ',
      password_notEmpty: 'please enter password',
      password_length: 'The password should not be less than 6 characters'
    }
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    createRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Importance',
    type: 'Type',
    remark: 'Remark',
    filter: 'Condition Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'Reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    publish: 'Publish',
    draft: 'Draft'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive\'s \'include\' currently does not support caching based on routes, so now it\'s cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or don\'t use keep-alive\'s \'include\' to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    showTagsView: 'Open Tags-View',
    showSidebarLogo: 'Sidebar Logo',
    fixedHeader: 'Fixed Header',
    sidebarTextTheme: 'Sidebar Text Theme'
  },
  footer: {
    copyright: '©2020 TD Tech Ltd. All rights reserved'
  }
}
