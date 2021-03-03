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
      label: '告警管理',
      record: {
        label: '告警记录',
        clean: {
          label: '消除'
        },
        detail: {
          label: '详情'
        }
      },
      shield: {
        label: '告警屏蔽',
        on: {
          label: '屏蔽'
        },
        off: {
          label: '取消屏蔽'
        }
      },
      switch: {
        label: '告警开关',
        on: {
          label: '打开'
        },
        off: {
          label: '关闭'
        }
      }
    },
    device: {
      label: '设备管理',
      config: {
        label: '设备配置',
        file: {
          label: '配置文件',
          fetch: {
            label: '抓取'
          },
          download: {
            label: '下载'
          }
        },
        single: {
          label: '单一配置',
          refresh: {
            label: '配置刷新'
          },
          modify: {
            label: '修改实例'
          },
          modify_cancel: {
            label: '取消修改'
          },
          add: {
            label: '新增实例'
          },
          add_confirm: {
            label: '新增应用'
          },
          add_cancel: {
            label: '取消新增'
          },
          param_value: {
            label: '获取参数值'
          },
          param_name: {
            label: '获取参数名'
          },
          delete: {
            label: '删除实例'
          }
        },
        template: {
          label: '配置模板',
          modify: {
            label: '修改',
            modify_title: {
              label: '修改模板标题'
            },
            modify_detail: {
              label: '修改模板详情'
            },
            modify_detail_cancel: {
              label: '取消修改模板详情'
            }
          },
          apply: {
            label: '应用'
          },
          copy: {
            label: '复制'
          },
          add: {
            label: '新增'
          }
        }
      },
      diagnose: {
        label: '设备诊断',
        apply_udp_echo: {
          label: 'UdpEcho诊断'
        },
        apply_ping: {
          label: 'Ping诊断'
        },
        apply_tr143_up: {
          label: '上行速率诊断'
        },
        apply_tr143_down: {
          label: '下行速率诊断'
        },
        apply_trace_route: {
          label: 'TraceRoute诊断'
        }
      },
      type: {
        label: '设备类型',
        add: {
          label: '新增'
        },
        modify: {
          label: '修改'
        },
        remove: {
          label: '删除'
        }
      },
      group: {
        label: '设备分组',
        add: {
          label: '新增'
        },
        modify: {
          label: '修改'
        },
        remove: {
          label: '删除'
        },
        detail: {
          label: '详情',
          add: {
            label: '添加设备'
          },
          remove: {
            label: '移除设备'
          }
        }
      },
      list: {
        label: '设备列表',
        monitor: {
          label: '监控'
        },
        add: {
          label: '新增设备'
        },
        import: {
          label: '批量导入'
        },
        export: {
          label: '导出'
        },
        detail: {
          label: '详情',
          restart: {
            label: '重启'
          },
          reset: {
            label: '恢复出厂设置'
          },
          reset_server_password: {
            label: '重置服务器密码'
          },
          restore_password: {
            label: '恢复近端密码'
          }
        },
        delete: {
          label: '删除'
        },
        modify: {
          label: '修改'
        }
      },
      upgrade: {
        label: '设备升级',
        history: {
          label: '历史记录'
        },
        list: {
          label: '升级列表',
          add: {
            label: '新增'
          },
          detail: {
            label: '详情',
            cancel: {
              label: '取消升级任务'
            }
          }
        }
      }
    },
    file: {
      label: '文件管理',
      config: {
        label: '文件配置',
        add: {
          label: '新增'
        },
        modify: {
          label: '编辑'
        },
        remove: {
          label: '删除'
        }
      },
      list: {
        label: '文件列表',
        upload: {
          label: '上传'
        },
        remove: {
          label: '删除'
        },
        download: {
          label: '下载'
        },
        modify: {
          label: '编辑'
        },
        re_upload: {
          label: '重新上传'
        }
      }
    },
    log: {
      label: '日志审计',
      connection: {
        label: '连接日志',
        export: {
          label: '导出'
        }
      },
      device: {
        label: '设备日志',
        export: {
          label: '导出'
        },
        catch: {
          label: '抓取'
        },
        download: {
          label: '下载'
        }
      },
      login: {
        label: '登录日志',
        export: {
          label: '导出'
        }
      },
      operation: {
        label: '操作日志',
        detail: {
          label: '详情'
        },
        export: {
          label: '导出'
        }
      },
      system: {
        label: '系统日志',
        detail: {
          label: '详情'
        },
        export: {
          label: '导出'
        }
      }
    },
    manufacture: {
      label: '厂商管理',
      add: {
        label: '新增'
      },
      detail: {
        label: '详情',
        add: {
          label: '新增产品型号'
        },
        modify: {
          label: '修改产品型号'
        },
        remove: {
          label: '删除产品型号'
        },
        setting: {
          label: '设置产品型号功能特性'
        }
      },
      disable: {
        label: '禁用',
        batch: {
          label: '批量禁用'
        }
      },
      enable: {
        label: '启用',
        batch: {
          label: '批量启用'
        }
      },
      modify: {
        label: '修改'
      },
      remove: {
        label: '删除'
      },
      upload: {
        label: '上传'
      }
    },
    monitor: {
      label: '设备监控',
      history: {
        label: '历史记录',
        statistics: {
          label: '详情'
        }
      },
      task: {
        label: '监控任务',
        remove: {
          label: '删除'
        },
        add: {
          label: '删除新增'
        },
        stop: {
          label: '停止'
        },
        start: {
          label: '启动'
        },
        modify: {
          label: '修改'
        },
        copy: {
          label: '复制'
        },
        detail: {
          label: '明细',
          stop: {
            label: '停止'
          },
          start: {
            label: '启动'
          }
        }
      }
    },
    organization: {
      label: '组织机构',
      add: {
        label: '新增'
      },
      modify: {
        label: '修改'
      },
      remove: {
        label: '删除'
      }
    },
    system_config: {
      label: '系统设置',
      modify: {
        label: '修改'
      }
    },
    privilege: {
      label: '权限管理',
      role: {
        add: {
          label: '新增'
        },
        lock: {
          label: '锁定'
        },
        modify: {
          label: '修改'
        },
        remove: {
          label: '删除'
        },
        unlock: {
          label: '解锁'
        }
      }
    },
    system: {
      label: '系统管理'
    },
    user: {
      label: '用户管理',
      add: {
        label: '新增'
      },
      lock: {
        label: '锁定'
      },
      modify: {
        label: '修改'
      },
      password: {
        reset: {
          label: '重置密码'
        }
      },
      remove: {
        label: '删除'
      },
      unlock: {
        label: '解锁'
      }
    },
    application: {
      label: '应用管理',
      store: {
        label: '应用商店',
        deploy: {
          label: '部署'
        },
        upload: {
          label: '上传'
        }
      },
      run: {
        label: '运行信息',
        start: {
          label: '启动'
        },
        stop: {
          label: '停止'
        },
        restart: {
          label: '重启'
        },
        uninstall: {
          label: '卸载'
        }
      },
      deployment: {
        label: '部署信息'
      }
    },
    container: {
      label: '容器管理',
      store: {
        label: '容器商店',
        deploy: {
          label: '部署'
        },
        upload: {
          label: '上传'
        }
      },
      deploy: {
        label: '部署信息'
      },
      run: {
        label: '运行信息',
        restart: {
          label: '重启'
        },
        start: {
          label: '启动'
        },
        stop: {
          label: '停止'
        },
        modify: {
          label: '修改'
        },
        uninstall: {
          label: '卸载'
        }
      }
    }
  },
  // 通用按钮
  btn: {
    add: '新  增',
    apply: '应用',
    cancel: '取  消',
    confirm: '确  定',
    create: '创  建',
    delete: '删  除',
    details: '详 情',
    disable: '禁  用',
    download_template: '下载模板',
    edit: '修  改',
    enable: '启  用',
    export: '导  出',
    import: '导  入',
    lock: '锁  定',
    reboot: '重  启',
    reset: '重  置',
    reset_password: '重置密码',
    restart: '重  启',
    save: '保  存',
    search: '搜  索',
    start: '启  动',
    stop: '停  止',
    uninstall: '卸  载',
    unlock: '解  锁',
    upload: '上 传',
    download: '下 载',
    re_upload: '重新上传'
  },
  // 通用国际化
  general: {
    filter: '条件查询',
    device_type: '设备类型',
    vendor_name: '厂商',
    product_model: '产品型号'
  },
  // 系统启动引导创建第一个管理员用户的页面
  guide: {
    welcome: '感谢您选择并使用鼎桥mCube物联网云端管理平台，为保障用户数据安全，鼎桥mCube物联网云端管理平台未予置任何账号，请先创建一个管理员账号。',
    attention: '注意：此用户默认拥有系统管理侧权限，请妥善保管账号密码。',
    message: {
      register_success: '已注册成功，将跳转到登录页！'
    }
  },
  // 登录成功后进入的框架页面
  index: {
    personal_center: {
      account_detail: '用户详情',
      isChangePassword: '是否修改密码'
    },
    modify_password: {
      current_password: '当前密码',
      new_password: '新密码',
      confirm_new_password: '确认新密码',
      rules: {
        current_password_not_empty: '请输入当前密码',
        new_password_not_empty: '请输入新密码',
        confirm_new_password_not_empty: '请确认并再次输入新密码'
      }
    }
  },
  // 路由
  route: {
    dashboard: '首页',
    system: '系统管理',
    system_user: '用户管理',
    system_auth: '权限管理',
    system_organization: '组织机构',
    system_settings: '系统设置',
    vendor: '厂商管理',
    vendor_detail: '厂商详情',
    product_feature: '功能配置',
    device: '设备管理',
    device_type: '设备类型',
    device_list: '设备列表',
    device_details: '设备详情',
    device_diagnose: '设备诊断',
    device_group: '设备分组',
    device_group_details: '分组详情',
    device_config: '设备配置',
    device_config_single: '单一配置',
    device_config_template: '配置模板',
    config_template_detail: '配置模板详情',
    device_config_file: '配置文件',
    device_upgrade: '设备升级',
    device_upgrade_list: '升级列表',
    device_upgrade_details: '升级详情',
    device_upgrade_history: '历史记录',
    application: '应用管理',
    application_market: '应用商店',
    application_deploy: '部署信息',
    application_run: '运行信息',
    container: '容器管理',
    container_market: '容器商店',
    container_deploy: '部署信息',
    container_run: '运行信息',
    monitor: '设备监控',
    monitor_task: '监控任务',
    monitor_details: '监控任务详情',
    monitor_history: '历史记录',
    history_details: '监控记录详情',
    alarm: '告警管理',
    alarm_record: '告警记录',
    alarm_shield: '告警屏蔽',
    alarm_switch: '告警开关',
    file: '文件管理',
    file_list: '文件列表',
    file_config: '文件配置',
    log: '日志审计',
    log_login: '登录日志',
    log_operation: '操作日志',
    log_system: '系统日志',
    log_device: '设备日志',
    log_connect: '连接日志',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    theme: '换肤',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心'
  },
  // 系统管理一级菜单
  system: {
    // 用户管理二级菜单
    user: {
      create: '新建用户',
      delete: '删除用户',
      email: '邮箱',
      mobile: '联系电话',
      name: '姓名',
      update: '修改用户',
      username: '用户名',
      rules: {
        username_not_empty: '用户名不能为空',
        username_pattern: '请输入4-32位字符，允许输入字母、数字、_、-，且必须以字母开头',
        name_not_empty: '姓名不能为空',
        name_pattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，必须以字母或中文开头',
        mobile_pattern: '请输入正确的手机号码',
        email_pattern: '请输入正确的邮箱'
      },
      tips: {
        organization: '选择组织机构',
        modify_self: '不能修改自己的信息',
        reset_self_password: '不能重置自己的密码',
        role: '选择角色',
        none_select: '请选择用户'
      }
    },
    // 权限管理二级菜单
    auth: {
      role: '角色',
      preset: {
        name: '超级管理员',
        description: '系统预置的超级管理员角色，拥有系统所有权限'
      }
    },
    // 组织机构二级菜单
    organization: {
      filterTips: '输入关键字进行过滤',
      createOrganzation: '新建组织',
      editOrganzation: '编辑组织',
      organzationDetail: '组织详情'
    },
    settings: {
      LICENSE_CONFIG: 'License设置',
      SYSTEM: '系统设置',
      BASIC: '基本设置',
      south_file_server_address: '南向文件服务地址',
      south_file_server_address_label: 'HTTP URL地址，示例：http://12.158.154.121:8180，设备通过该服务下载固件升级包等文件，必须以http://或https://开头',
      BATCH_OPERATION: '批量操作设置',
      device_batch_add: '设备批量新增限制',
      device_batch_add_label: '范围10~5000，默认50，限制每次批量导入的设备数量，超过该设置时不允许导入，',
      upgrade_count: '升级数量限制',
      upgrade_count_label: '范围10~100，默认50，设备升级涉及到大文件传输，同时升级数量太大，会影响平台的性能，',
      REMOTE_OPERATION_TIMEOUT: '远程操作超时设置',
      upgrade_or_deploy_overtime: '升级或部署超时时间',
      upgrade_or_deploy_overtime_label: '单位分钟，范围10~60，默认30，设备升级、容器部署、应用部署超时未收到答复，平台可再次对该设备进行升级',
      diagnose_overtime: '诊断超时时间',
      diagnose_overtime_label: '单位分钟，范围2~15，默认2，设备诊断超时未收到结果，平台可再次发起诊断',
      update_config_overtime: '修改配置超时时间',
      update_config_overtime_label: '单位分钟，范围1~15，默认3，修改配置超时未收到修改结果，平台可再次修改相关配置',
      catch_device_file_overtime: '抓取设备文件超时时间',
      catch_device_file_overtime_label: '单位分钟，范围10~60，默认30，抓取设备配置文件、采集设备日志时，设备超时未上传完成，平台可重新抓取',
      other_operate_overtime: '其他远程操作超时时间',
      other_operate_overtime_label: '单位分钟，范围1~15，默认3，默认涵盖容器、应用、告警相关操作，超时未获得操作结果，平台可再次发起操作',
      LIMIT_TRAFFIC: '限流设置',
      command_delivery_frequency: '下发指令频率限制',
      command_delivery_frequency_label: '范围1~25，默认5，限制平台每秒钟下发到单个设备的指令数量',
      command_report_frequency: '上报消息频率限制',
      command_report_frequency_label: '范围1~50，默认10，限制单个设备每秒上报平台的消息数，超过该频率50%时将不再处理该设备的消息',
      SECURITY: '安全设置',
      session_overtime: '登录会话超时时间',
      session_overtime_label: '单位分钟，范围10~30，默认15，登录平台超过设置的超时时间后，要求用户重新登录平台',
      password_validity_period: '密码有效期',
      password_validity_period_label: '单位天，范围1~365，密码过期时，账户不可登录',
      account_automatic_lock_count: '账户自动锁定',
      account_automatic_lock_count_label: '单位次，范围3~10，默认3次，同一账户连续登录失败指定次数时，自动锁定该账户',
      account_automatic_unlock_time: '账户自动解锁时间',
      account_automatic_unlock_time_label: '单位分钟，范围10~720，默认30分钟，自动锁定的账户，到设置时间后自动解锁',
      ip_automatic_lock_count: 'IP自动锁定',
      ip_automatic_lock_count_label: '单位次，范围6~100，默认6次，同一IP连续登录失败指定次数时，自动锁定该IP',
      ip_automatic_unlock_time: 'IP自动解锁时间',
      ip_automatic_unlock_time_label: '单位分钟，范围10~720，默认30分钟，自动锁定的IP，到设置时间后自动解锁',
      IP_WHITE_LIST: 'IP白名单',
      IP_BLACK_LIST: 'IP黑名单',
      ip: 'IP',
      ip_createTime: '创建时间',
      ip_updateTime: '更新时间',
      LOGIN_TIME: '登录时间限制',
      TR069: 'TR069设置',
      device_online_overtime: '设备在线超时时间',
      device_online_overtime_label: '单位分钟，范围1~7200，默认240，设备超过设置时间未与平台连接，平台视作设备离线',
      loginTime: '登录时间段',
      rules: {
        south_file_server_address: '南向文件服务地址不能为空',
        south_file_server_address_pattern: '输入URL地址,必须以http://或https://开头',
        device_batch_add: '设备批量新增限制不能为空',
        device_batch_add_pattern: '范围[10，5000]，默认50',
        upgrade_count: '升级数量限制不能为空',
        upgrade_count_pattern: '范围[10，100]，默认50',
        upgrade_or_deploy_overtime: '升级超时时间不能为空',
        upgrade_or_deploy_overtime_pattern: '范围[10，60]，默认30',
        diagnose_overtime: '诊断超时时间不能为空',
        diagnose_overtime_pattern: '范围[2，15]，默认5',
        update_config_overtime: '修改配置超时时间不能为空',
        update_config_overtime_pattern: '范围[1，15]，默认3',
        catch_device_file_overtime: '采集日志超时时间不能为空',
        catch_device_file_overtime_pattern: '范围[10，60]，默认30',
        other_operate_overtime: '其他远程操作超时时间不能为空',
        other_operate_overtime_pattern: '范围[1，15]，默认3',
        command_delivery_frequency: '下发指令频率限制不能为空',
        command_delivery_frequency_pattern: '范围[1，25]，默认5',
        command_report_frequency: '上报消息频率限制不能为空',
        command_report_frequency_pattern: '范围[1，50]，默认10',
        session_overtime: '登录会话超时时间不能为空',
        session_overtime_pattern: '范围[10,30]，默认15分钟',
        password_validity_period: '密码有效期不能为空',
        password_validity_period_pattern: '范围[1，365]',
        account_automatic_lock_count: '账户安全失败次数不能为空',
        account_automatic_lock_count_pattern: '范围[3，10]',
        account_automatic_unlock_time: '账户安全锁定时间不能为空',
        account_automatic_unlock_time_pattern: '范围[10，720]',
        ip_automatic_lock_count: 'IP安全失败次数不能为空',
        ip_automatic_lock_count_pattern: '范围[6，100]',
        ip_automatic_unlock_time: 'IP安全锁定时间不能为空',
        ip_automatic_unlock_time_pattern: '范围[10，720]',
        device_online_overtime: '设备在线超时时间不能为空',
        device_online_overtime_pattern: '范围[1，7200]，默认120',
        ip_pattern: '请输入正确的IP地址',
        ip_has_mask_pattern: '请输入正确的IP地址或IP网段，仅支持/8,/16,/24,/32的掩码位'
      },
      responseTips: {
        configSuccess: '操作成功',
        configFailed: '操作失败',
        duplicateIP: '重复IP',
        loginTime: '登录时间段数量超过限制',
        loginTimeOverlaps: '设置的登录时间与其他时间段重复'
      }
    }
  },
  // 应用管理一级菜单
  application: {
    name: '应用名称',
    deploy: '应用部署'
  },
  // 告警管理一级菜单
  alarm: {
    rules: {
      description_not_empty: '请输入消除说明',
      description_pattern: '请输入1-256位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
    }
  },
  // 文件管理一级菜单
  file: {
    // 文件列表二级菜单
    type: '文件类型',
    list: {
      upload: '上传',
      name: '文件名称',
      version: '版本号',
      size: '文件大小',
      description: '文件描述',
      upload_time: '上传时间',
      select_file: '选择文件',
      rule_tips: {
        type: '请选择文件类型',
        name: '请填写名称',
        version: '请填写版本号',
        vendor: '请选择厂商',
        product_model: '请选择产品型号',
        file_type: '请选择文件类型',
        device_type: '请选择设备类型',
        description: '请输入描述...',
        upload_type_prefix: '只能上传',
        upload_type_suffix: '文件，且不超过500MB',
        app_pattern: '请输入4-32字符，允许输入字母、数字、特殊符号（`/`、`- `），且必须以字母开头',
        version_pattern: '请输入2-64字符，允许输入字母、数字、特殊符号（`.`、`- `），且必须以字母或数字开头',
        description_pattern: '请输入0-128位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
      },
      message: {
        update_confirm: '若当前文件存在使用记录，将仅更新文件名称及描述，是否继续？',
        too_large: '文件过大，已超过500M，请重新选择文件！',
        too_large_5M: '文件过大，已超过5M，请重新选择文件！',
        file_only_one: '仅支持上传一张图片！',
        select_file: '请选择文件！',
        upload_success: '上传成功！',
        upload_failed: '上传失败！',
        confirm_delete: '此操作将永久删除该文件, 是否继续?',
        exceed_file_count: '一次只能上传一个文件!',
        duplicate: '文件信息重复，请修改后重试！',
        empty_file: '文件为空，请重新选择上传！',
        type_error: '不接受的文件类型！',
        file_not_exist: '文件不存在！',
        file_is_using: '文件正在被使用！'
      }
    },
    config: {
      rules: {
        type_pattern: '请输入2-32位字符，允许输入字母、数字、中文、特殊符号（`- `、`_`）、空格，且必须以字母或中文开头开头'
      }
    }
  },
  tags: {
    refresh: '标签刷新',
    close_all: '关闭所有',
    close: '关闭',
    close_others: '关闭其他'
  },
  // 操作日志类型
  operate: {
    unknown: '未知',
    index: {
      personal_center: {
        modify: '首页-个人中心-编辑用户信息',
        upload_image: '首页-个人中心-上传头像'
      },
      password: {
        modify: '首页-个人中心-修改密码'
      }
    },
    settings: {
      organization: {
        add: '系统管理-组织机构-新增',
        modify: '系统管理-组织机构-编辑',
        remove: '系统管理-组织机构-删除'
      },
      user: {
        add: '系统管理-用户管理-新增',
        modify: '系统管理-用户管理-编辑',
        remove: '系统管理-用户管理-删除',
        reset_password: '系统管理-用户管理-重置密码',
        lock: '系统管理-用户管理-锁定',
        unlock: '系统管理-用户管理-解锁'
      },
      role: {
        add: '系统管理-权限管理-新增',
        modify: '系统管理-权限管理-修改',
        remove: '系统管理-权限管理-删除',
        lock: '系统管理-权限管理-锁定',
        unlock: '系统管理-权限管理-解锁'
      },
      config: {
        modify: '系统管理-系统设置-修改',
        ip_white: {
          modify: '系统管理-系统设置-IP白名单修改'
        },
        ip_black: {
          modify: '系统管理-系统设置-IP黑名单修改'
        }
      }
    },
    vendor: {
      add: '厂商管理-厂商管理-新增',
      remove: '厂商管理-厂商管理-删除',
      modify: '厂商管理-厂商管理-修改',
      batch_enable: '厂商管理-厂商管理-批量启用',
      batch_disable: '厂商管理-厂商管理-批量禁用',
      enable: '厂商管理-厂商管理-启用',
      disable: '厂商管理-厂商管理-禁用',
      file_upload: '厂商管理-厂商管理-文件上传',
      product: {
        add: '厂商管理-厂商详情-新增产品型号',
        modify: '厂商管理-厂商详情-修改产品型号',
        remove: '厂商管理-厂商详情-删除产品型号',
        alarm_code: {
          add: '厂商管理-厂商详情的功能设置-新增告警码',
          modify: '厂商管理-厂商详情的功能设置-修改告警码',
          remove: '厂商管理-厂商详情的功能设置-删除告警码'
        },
        performance_config: {
          add: '厂商管理-厂商详情的功能设置-新增监控指标',
          modify: '厂商管理-厂商详情的功能设置-修改监控指标',
          delete: '厂商管理-厂商详情的功能设置-删除监控指标'
        },
        config_file_type: {
          add: '厂商管理-厂商详情的功能设置-新增配置文件格式',
          modify: '厂商管理-厂商详情的功能设置-修改配置文件格式',
          delete: '厂商管理-厂商详情的功能设置-删除配置文件格式'
        },
        log_file_type: {
          add: '厂商管理-厂商详情的功能设置-新增日志文件格式',
          modify: '厂商管理-厂商详情的功能设置-修改日志文件格式',
          delete: '厂商管理-厂商详情的功能设置-删除日志文件格式'
        }
      }
    },
    device: {
      type: {
        add: '设备管理-设备类型-新增',
        modify: '设备管理-设备类型-修改',
        remove: '设备管理-设备类型-删除'
      },
      list: {
        add: '设备管理-设备列表-新增',
        modify: '设备管理-设备列表-修改',
        remove: '设备管理-设备列表-删除',
        import: '设备管理-设备列表-批量导入',
        restart: '设备管理-设备列表-设备重启',
        reset: '设备管理-设备列表-恢复出厂设置',
        reset_server_password: '设备管理-设备列表-重置服务器密码',
        restore_near_end_password: '设备管理-设备列表-恢复近端密码',
        ping: '设备管理-设备列表-PING',
        trace_route: '设备管理-设备列表-TRACE_ROUTE',
        config: '设备管理-设备列表-设备配置',
        reset_password: '设备管理-设备列表-重置密码',
        diagnosis: '设备管理-设备列表-设备诊断',
        tr143_up: '设备管理-设备列表-上行诊断',
        tr143_down: '设备管理-设备列表-下行诊断',
        udp_echo: '设备管理-设备列表-UdpEcho诊断',
        export: '设备管理-设备列表-导出'
      },
      group: {
        add: '设备管理-设备分组-新增',
        modify: '设备管理-设备分组-修改',
        remove: '设备管理-设备分组-删除',
        detail: {
          remove: '设备管理-设备分组-分组详情-删除下挂设备',
          batch_remove: '设备管理-设备分组-分组详情-批量删除下挂设备',
          add: '设备管理-设备分组-分组详情-批量新增下挂设备'
        }
      },
      upgrade: {
        upgrade: '设备管理-设备升级-升级列表-升级'
      },
      config: {
        refresh: '设备管理-设备配置-单设备配置-配置刷新',
        set_value: '设备管理-设备配置-单设备配置-设置参数值',
        remove: '设备管理-设备配置-单设备配置-删除节点',
        add: '设备管理-设备配置-单设备配置-新增节点',
        get_name: '设备管理-设备配置-单设备配置-获取参数名',
        get_value: '设备管理-设备配置-单设备配置-获取参数值',
        update: '设备管理-设备配置-单设备配置-配置更新',
        fetch: '设备管理-设备配置-配置文件-抓取',
        template: {
          add: '设备管理-设备配置-配置模板-新增',
          modify: '设备管理-设备配置-配置模板-修改标题',
          detail: '设备管理-设备配置-配置模板-应用',
          copy: '设备管理-设备配置-配置模板-复制',
          apply: '设备管理-设备配置-配置模板-应用'
        }
      }
    },
    application: {
      deploy: '应用管理-应用商店-应用部署',
      re_deploy: '应用管理-部署信息-重新部署',
      start: '应用管理-运行信息-启动应用',
      stop: '应用管理-运行信息-停止应用',
      restart: '应用管理-运行信息-重启应用',
      uninstall: '应用管理-运行信息-卸载应用'
    },
    container: {
      deploy: '容器管理-容器商店-部署',
      start: '容器管理-运行信息-启动',
      stop: '容器管理-运行信息-停止',
      restart: '容器管理-运行信息-重启',
      uninstall: '容器管理-运行信息-卸载',
      modify: '容器管理-运行信息-修改'
    },
    monitor: {
      add: '设备监控-监控任务-新增',
      remove: '设备监控-监控任务-删除',
      start: '设备监控-监控任务-启动',
      stop: '设备监控-监控任务-停止',
      modify: '设备监控-监控任务-修改',
      copy: '设备监控-监控任务-复制',
      device: {
        stop: '设备监控-监控任务-任务详情-停止',
        start: '设备监控-监控任务-任务详情-启动'
      }
    },
    alarm: {
      clean: '告警管理-设备告警-消除',
      shield: '告警管理-告警屏蔽-屏蔽',
      batch_shield: '告警管理-告警屏蔽-批量屏蔽',
      cancel_shield: '告警管理-告警屏蔽-取消屏蔽',
      open: '告警管理-告警开关-开启',
      batch_open: '告警管理-告警开关-批量开启',
      close: '告警管理-告警开关-关闭',
      batch_close: '告警管理-告警开关-批量关闭'
    },
    file: {
      upload: '文件管理-文件列表-上传',
      re_upload: '文件管理-文件列表-重新上传',
      remove: '文件管理-文件列表-删除',
      modify: '文件管理-文件列表-修改',
      download: '文件管理-文件列表-下载',
      type: {
        remove: '文件管理-文件配置-删除',
        modify: '文件管理-文件配置-修改',
        add: '文件管理-文件配置-新增'
      }
    },
    log: {
      catch: '日志审计-设备日志-抓取日志'
    }
  },
  // 登录日志描述
  authentication: {
    failed: {
      reason: {
        account: {
          not: {
            found: '用户名不存在'
          },
          locked: '用户已被锁定'
        },
        credentials: {
          bad: '密码错误'
        }
      },
      server: {
        error: '服务器错误'
      }
    },
    logout: {
      logout: '退出登录',
      elsewhere: '已在其他地方登录',
      overtime: '登录超时',
      role: {
        modify: '角色信息已修改',
        lock: '角色被锁定',
        remove: '角色已删除'
      },
      user: {
        lock: '用户被锁定',
        modify: {
          info: '用户信息已修改',
          profile: '用户登录信息已修改'
        },
        password: {
          modify: '密码已修改',
          password: '密码已重置'
        },
        remove: '用户已删除'
      }
    }
  },
  // --------------------------------------------------------------------------------------
  // 此分割线以上的是已整理过的国际化，以下是未整理过的国际化
  // --------------------------------------------------------------------------------------
  common: {
    create_time: '创建时间',
    deleted: '删除',
    description: '描述',
    locked: '锁定',
    expired: '已过期',
    normal: '正常',
    operation: '操作',
    prompt: '提示',
    status: '状态',
    update_time: '更新时间',
    version: '版本',
    warning: '警告',
    // -------------------------------------------------
    detail: '详情',
    copy: '复制',
    apply: '应用',
    enable: '启用',
    disable: '禁用',
    error: '错误',
    addGrade: '新增升级',
    close: '关闭',
    next: '下一步',
    previous: '上一步',
    confirmUpgrade: '确认升级',
    export: '导出',
    deviceType: '设备类型',
    vendor: '厂商',
    productModel: '产品型号',
    targetVersion: '升级版本',
    beforeVersion: '当前版本',
    selectStart: '开始',
    selectEnd: '结束',
    selectRange: '选择时间范围',
    beginTime: '开始时间',
    finishTime: '完成时间',
    reason: '原因',
    summary: '统计',
    sn: '设备SN',
    quotation: '：',
    tips: {
      server_error: '服务器异常！',
      delete_confirm: '是否确定删除？',
      non_selection: '请至少选择一条记录',
      conflict: {
        name: '名称冲突'
      },
      error: {
        unknown: '未知异常返回值：'
      },
      illegal: {
        param: '请求参数非法'
      },
      success: {
        delete: '删除成功',
        lock: '锁定成功',
        unlock: '解锁成功',
        operation: '操作成功'
      },
      fail: {
        operation: '操作失败'
      },
      websocketError: '当前浏览器无法接收实时信息，请更换浏览器或升级当前浏览器版本！'
    },
    rules: {
      // 适用以下名称 角色名、组织结构名称、设备名称 、设备厂商、文件厂商
      commonNamePattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，且必须以字母或中文开头',
      typeCodePattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，且必须以字母或数字开头',
      typeNamePattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，且必须以字母、中文或数字开头',
      descriptionPattern: '请输入0-32位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符',
      versionPattern: '请输入2-16位字符，允许输入字母、数字、特殊符号（`.`、`- `），且必须以字母或数字开头',
      passPattern: '请输入6-32位密码，必须同时包含大小写字母、数字、特殊字符(`~!@#$%^&*()-_=+|[{}];:\'",<.>/?)',
      banCharacter: '禁止输入（`<`、`>`、`[`、`]`）这几个特殊字符',
      url_pattern_tips: '请输入IP地址（http(s)://[IP]:[端口]/*）或域名地址（http(s)://[域名]/*）'
    },
    message: {
      server_exception: '服务器异常!',
      switch_language_success: '切换语言成功'
    },
    day: '天',
    hour: '小时',
    minute: '分',
    second: '秒'
  },
  user: {
    image: '头像',
    password: '密码',
    headPortrits: '头像',
    updatePassword: '修改密码',
    confirmPassword: '确认密码',
    oldPassword: '原密码',
    newPassword: '新密码',
    checkNewPassword: '重复新密码',
    userForm: {
      prompt: {
        title: '提示框',
        resetPassword: '重置密码',
        onlyChooseOne: '只能选择一条记录执行操作',
        resetSuccessful: '重置密码成功！',
        resetFailed: '重置密码失败！'
      }
    },
    rules: {
      account: {
        notEmpty: '用户名不能为空',
        pattern: '请输入4-32位字符，允许输入字母、数字、_、-，且必须以字母开头'
      },
      name: {
        notEmpty: '姓名不能为空',
        pattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，必须以字母或中文开头'
      },
      mobile: {
        pattern: '请输入正确的手机号码'
      },
      email: {
        pattern: '请输入正确的邮箱'
      }
    }
  },
  vendor: {
    name: '厂商名称',
    status: '厂商状态',
    oui: '组织唯一标识符',
    deleteTips: '确认删除？',
    confirmEnableSelected: '确认启用已选择厂商？',
    confirmDisableSelected: '确认禁用已选择厂商？',
    batchEnableTips: '确认启用？',
    batchDisableTips: '确认禁用？',
    confirmBatchEnableSelected: '是否确认启用已选择厂商？',
    confirmBatchDisableSelected: '是否确认禁用已选择厂商？',
    subList: {
      name: '文件名称',
      version: '版本号',
      fileType: '文件类型',
      size: '文件大小',
      time: '上传时间',
      model: '产品型号',
      model_list: '型号列表',
      deviceType: '设备类型'
    },
    rules: {
      nameIsEmpty: '请输入厂商名称',
      name_pattern: '请输入2-32字符，允许输入字母、数字、空格、特殊符号（`.`,`_`,`/`、`-`），且必须以字母或中文开头',
      description_pattern: '请输入最长128个字符，不含特殊字符（`./`、`>`、`<`）',
      oui_pattern: '请输入组织唯一标识符',
      type_pattern: '请选择设备类型',
      model_pattern: '请输入4-32字符，允许输入字母、数字、特殊符号（`.`、`/`、`- `、`_`），且必须以字母开头，字母不区分大小写',
      typeIsEmpty: '设备类型不能为空',
      protocolIsEmpty: '协议不能为空',
      modelIsEmpty: '产品型号不能为空'
    },
    device: {
      type: {
        name: '设备类型',
        tips: '请选择设备类型'
      },
      model: {
        name: '产品型号',
        tips: '请输入产品型号',
        protocol: '接入协议'
      }
    }
  },
  dashboard: {
    userCount: '用户总数',
    currentDevice: '接入设备',
    currentVendor: '接入厂商',
    currentFile: '文件总数',
    activeUserCount: '活跃用户数',
    hotWords: {
      DEVICE_UPGRADE: '设备升级',
      APP_DEPLOY: '应用部署',
      RESTART_APP: '重启应用'
    }
  },
  auth: {
    role: {
      selectPermissions: '选择权限',
      name: '角色名称',
      description: '角色描述',
      create: '新增角色',
      update: '编辑角色',
      rules: {
        name: '角色名称必填',
        name_pattern: '请输入2-32位字符，允许输入字母、数字、特殊符号（`_`、`-`），且必须以字母或中文开头',
        description_pattern: '请输入0-128位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
      },
      lock: '锁定',
      normal: '正常',
      tips: {
        authority: {
          null: '请勾选权限',
          changed: '权限信息已更新，请重新选择'
        },
        confirm: {
          delete: '是否确定删除该角色？',
          lock: '是否确定锁定该角色？',
          unlock: '是否确定解锁该角色？'
        },
        exception: {
          deleted: '该角色已被删除'
        },
        forbidden: {
          update: '您无权修改该角色',
          delete: '删除失败，当前角色正在被使用。',
          lock: '禁止锁定选中角色',
          unlock: '禁止解锁选中角色'
        },
        success: {
          save: '保存角色成功'
        }
      }
    }
  },
  updatePassword: {
    rules: {
      oldPassword: {
        notEmpty: '原密码不能为空',
        same: '输入密码与旧密码应相同'
      },
      newPassword: {
        notEmpty: '新密码不能为空',
        pattern: '请输入6-32位密码,必须同时包含大小写字母、数字、特殊字符(`~!@#$%^&*()-_=+|[{}];:\'",<.>/?)',
        cannotSame: '新密码和原密码不能相同'
      },
      checkNewPassword: {
        notEmpty: '重复新密码不能为空',
        cannotDiff: '两次密码输入不一致'
      }
    },
    editSuccessAlert: {
      title: '密码修改成功',
      confirmReLogin: '确定重新登录'
    }
  },
  organization: {
    rules: {
      nameIsEmpty: '名称不能为空',
      descriptionIsEmpty: '描述不能为空',
      namePattern: '请输入2-32位字符，允许输入字母、数字、特殊符号（`_`、`-`），且必须以字母或中文开头',
      descriptionPattern: '请输入1-128位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
    },
    name: '组织名称：',
    namePlaceholder: '请输入组织名称',
    description: '组织描述：',
    descriptionPlaceholder: '请输入组织名称',
    append: '创建',
    unknown: '未知组织机构',
    illegalParameter: '非法参数',
    permissionDenied: '没有操作权限，只能操作直属及其子组织机构',
    appendTips: '创建失败，组织机构层数超过限制',
    deleteTipsForUser: '删除失败，组织机构下存在用户，请先删除用户',
    deleteTipsForChild: '删除失败,存在子组织机构，请先删除子组织机构！',
    insertTips: '新增失败，组织名称重复',
    updateTips: '编辑失败，组织名称重复',
    change: '修改',
    remove: '删除',
    removeTips: '此操作将永久删除该组织机构, 是否继续？',
    removeCancel: '已取消删除',
    success: '成功',
    failed: '失败'
  },
  device: {
    containerName: '容器名称',
    status: '设备状态',
    chooseType: '选择设备类型',
    diagnose: {
      hopCount: '跳数',
      domain: '主机地址',
      domainName: '主机名称',
      traceErrorCode: '错误码',
      consumeTime: '耗时（ms）',
      responseTime: '总时长',
      time: '诊断时间',
      status: '诊断状态',
      history: '诊断历史',
      params: '诊断参数',
      result: '诊断结果',
      timely_diagnose: '实时诊断结果',
      ipPing: {
        config: '诊断配置',
        successCount: '成功次数',
        failureCount: '失败次数',
        lossRate: '丢包率（%）',
        averageResponseTime: '平均时间（ms）',
        minimumResponseTime: '最低时间（ms）',
        maximumResponseTime: '最高时间（ms）',
        name: 'Ping诊断',
        hostTips: '请输入正确的IP地址',
        numberOfRepetitionsTips: '范围[2，100]，默认10',
        dscpTips: '范围[0，63]，默认0',
        timeoutTips: '范围[50，200]，默认100',
        dataBlockSizeTips: '范围[1，65535]，默认32'
      },
      TraceRoute: {
        name: 'TraceRoute诊断',
        destAddrTips: '请输入目标地址',
        numberOfTriesTips: '范围[1，2，3]，默认3',
        maxHopCountTips: '范围[1，64]，默认15',
        timeoutTips: '范围[3000，20000]，默认5000',
        dataBlockSizeTips: '范围[38，32768]，默认38',
        dscpTips: '范围[0，63]，默认0'
      },
      Tr143Up: {
        uploadRate: '线路接口吞吐量（Mbps）',
        handshakeRoundTripTime: '握手往返时长（s）',
        transactionResponseTime: '事务响应时长（s）',
        transactionRequestRoundTripTime: '事务请求往返时长（s）',
        transactionResponseThroughput: '事务响应吞吐量（Mbps）',
        lineInterfaceThroughput: '线路接口吞吐量（Mbps）',
        time: '总体耗时（ms）',
        name: '上行速率诊断',
        testFileLength: '文件大小（MB）',
        testFileLengthTips: '范围[0，4095]，默认100',
        uploadURL: '上传地址',
        uploadURLTips: '请输入上传地址',
        ethernetPriority: '以太网优先级',
        ethernetPriorityTips: '范围[0，7]',
        dscp: 'DSCP',
        dscpTips: '范围[0，63]，默认0'
      },
      Tr143Down: {
        downloadRate: '线路接口吞吐量（Mbps）',
        handshakeRoundTripTime: '握手往返时长（s）',
        transactionResponseTime: '事务响应时长（s）',
        transactionRequestRoundTripTime: '事务请求往返时长（s）',
        transactionResponseThroughput: '事务响应吞吐量（Mbps）',
        lineInterfaceThroughput: '线路接口吞吐量（Mbps）',
        time: '总体耗时（ms）',
        name: '下行速率诊断',
        ethernetPriority: '以太网优先级',
        ethernetPriorityTips: '范围[0，7]',
        dscp: 'DSCP',
        dscpTips: '范围[0，63]，默认0',
        downloadURL: '下载地址',
        downloadURLTips: '请输入下载地址'
      },
      UdpEcho: {
        name: 'UDPEcho诊断',
        status: '开启状态',
        statusTips: '请选择开启状态',
        echoPlusStatus: 'EchoPlus开关',
        echoPlusStatusTips: '请选择EchoPlus开关',
        host: '来源地址',
        hostTips: '请输入来源地址',
        udpPort: 'UDP端口',
        udpPortTips: '范围[0，65535]，默认1'
      },
      start: '开始诊断',
      host: '目标IP',
      numberOfRepetitions: '诊断次数',
      dscp: 'DSCP',
      timeout: '超时时间（ms）',
      dataBlockSize: '数据大小',
      dataPackageSize: '数据包数量',
      destAddr: '目标地址',
      numberOfTries: '探测包数',
      maxHopCount: '路由跳数',
      fileSize: '文件大小',
      uploadUrl: '上传地址',
      ethernetPriority: '以太网优先级',
      downloadUrl: '下载地址',
      sourceAddr: '来源地址',
      udpPort: 'UDP端口',
      echoStatus: '开启状态',
      echoPlusStatus: 'EchoPlus开关'
    },
    config: {
      deleteTips: '确认删除？',
      addConfirm: '确认新增',
      prompt: {
        delete: '是否确认删除？',
        add: '是否确认新增实例？'
      },
      fetchParamName: '获取参数名',
      fetchParamValue: '获取参数值',
      refresh: '刷新',
      instep: '同步设备配置',
      apply: '应用',
      addTips: '请输入实例名称',
      update: {
        name: '修改',
        cancel: '取消修改'
      },
      add: {
        name: '新增实例',
        cancel: '取消新增'
      },
      copy: {
        name: '复制实例',
        cancel: '取消复制'
      },
      delete: '删除实例',
      template: {
        apply: {
          select: '选择设备更新配置'
        },
        name: '模板名称',
        vendor: '厂商',
        type: '设备类型',
        model: '产品型号',
        createTime: '创建时间',
        selectVendor: '请选择厂商',
        selectType: '请选择设备类型',
        create: '新建模板',
        edit: '编辑模板',
        copy: '复制模板',
        rules: {
          deviceNotEmpty: '设备信息不能为空',
          templateNameNotEmpty: '模板名称不能为空',
          name_not_empty: '模板名称不能为空',
          name_pattern: '请输入2-32位字符，允许输入字母、数字、_、-、空格及中文，必须以字母或中文开头'
        }
      }
    },
    vendor: '厂商',
    type: '设备类型',
    gradeTime: '升级时间',
    sn: '设备SN',
    name: '设备名称',
    model: '产品型号',
    softwareVersion: '软件版本',
    hardwareVersion: '硬件版本',
    applicationName: '应用名称',
    organization: '组织机构',
    query: '查询',
    registerTime: '注册时间',
    onlineTime: '上线时间',
    offlineTime: '离线时间',
    createDevice: '新增设备',
    bulkCreateDevice: '批量导入',
    startImport: '开始导入',
    selectFile: '选择文件',
    selectModel: '上传模板',
    deviceDetail: '设备详情',
    updateDevice: '修改设备',
    operation: '操作',
    detail: '详情',
    statusEnum: {
      normal: '正常',
      alarm: '告警',
      error: '故障',
      offline: '离线',
      unregistered: '未注册'
    },
    upgradeStatusEnum: {
      issuedFailed: '下发失败',
      upgrading: '升级中',
      success: '升级成功',
      failed: '升级失败'
    },
    details: {
      mac: 'MAC地址',
      ip: 'IP地址',
      currentVersion: '当前版本',
      status: '设备状态',
      vendor: '设备厂商',
      createUser: '创建用户',
      updateUser: '修改用户',
      hangingContainer: '下挂容器',
      hangingApplication: '下挂应用',
      deviceDescription: '设备描述'
    },
    rules: {
      name: '请输入设备名称',
      sn: '请输入设备SN',
      model: '请输入设备型号',
      vendor: '请输入厂商名称',
      description: '请输入设备描述'
    },
    tips: {
      exists_same_sn: '存在相同SN的已删除设备，继续操作将恢复并更新已删除设备信息，是否继续？',
      upgrade: '升级的操作发送成功',
      createDevice: '创建',
      updateDevice: '修改',
      deleteDevice: '删除',
      success: '成功',
      failed: '失败',
      removeTips: '此操作将永久删除该设备, 是否继续？',
      restartTips: '此操作将重启设备，是否继续？',
      restarting: '重启下发中...',
      restorePasswordTips: '此操作将恢复近端密码，是否继续？',
      restorePassword: '恢复下发中...',
      restoreSettingsTips: '此操作将恢复出厂设置，是否继续？',
      restoreSetting: '恢复下发中...',
      prompt: '提示',
      confirm: '确定',
      cancel: '取消',
      fileTypeLimit: '只能选择Excel文件',
      selectOrganizationTree: '请选择组织机构'
    },
    responseTips: {
      illegalParameter: '参数非法',
      unknown: '设备不存在',
      snConflict: 'SN已存在，请更换SN',
      ouiMissing: '当前厂商未配置组织唯一标识符，请配置组织唯一标识符后重试',
      permissionDenied: '只能选择直属及子组织机构，请重新选择组织机构'
    },
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
      deviceUpgrade: '设备升级',
      upgradeTime: '升级时间',
      result: '升级结果',
      process: '升级中',
      success: '升级成功',
      failed: '升级失败',
      detail: '升级详情',
      basicCondition: '基本条件',
      selectDevice: '选择设备',
      infoConfirm: '信息确认',
      reminder: '升级提示： ',
      upgradeType: '升级类型',
      version: '升级版本',
      isUpgradeRegularly: '是否定时升级',
      basicConditionRemind: ' 一个批次只能对同一产品型号的设备升级',
      selectDeviceRemind: ' 选择可升级的设备',
      infoConfirmRemind: ' 请确认信息无误后发起升级',
      modelPlaceholder: '请输入设备型号',
      selectDeviceTips: '请选择需要升级的设备',
      selectVersionTips: '请选择升级版本号',
      selectModelTips: '只能同时升级相同设备型号设备',
      selectVersion: '请选择升级版本'
    },
    group: {
      label: '设备分组',
      name: '分组名称',
      device_count: '设备数量',
      description: '描述',
      create_time: '创建时间',
      update_time: '更新时间',
      rules: {
        name_not_empty: '请输入新建分组的名称',
        description_pattern: '请输入0-128位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
      }
    },
    device_type: {
      rules: {
        description_pattern: '请输入0-128位字符，不允许输入（`./`、`<`、`>`）这3个特殊字符'
      }
    }
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心',
    updatePassword: '修改密码',
    about: '关于',
    empty_version: '暂无版本信息',
    current_version: '当前版本'
  },
  login: {
    title: '系统登录',
    logIn: '登 录',
    username: '账号',
    password: '密码',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
    rules: {
      // 适用以下名称 角色名、组织结构名称、设备名称 、设备厂商、文件厂商
      account_notEmpty: '请输入用户名',
      password_notEmpty: '请输入密码'
    },
    message: {
      retry_left: '用户名或密码错误，剩余重试次数：',
      account_pass_error: '用户名或密码错误',
      account_locked: '账号已锁定',
      ip_locked: 'IP已被锁定',
      invalid_time: '当前时间无法登录',
      account_expired: '账户已过期',
      logged: '您已登录，可直接访问',
      usedPassSame: '密码与近期使用过的重复，请重新设置！',
      licenseDue: 'License已经过期，请重新申请！',
      noLicense: '无License信息，请使用管理员账号导入License！'
    },
    passDue: {
      pass: '密码将在',
      due: '天后过期，请',
      goChange: '前往修改',
      fullPoint: '。'
    }
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色'
  },
  container: {
    deploy: '容器部署',
    type: '设备类型',
    model: '产品型号',
    query: '查询',
    latestVersion: '最新版本',
    appSize: '应用大小',
    uploadTime: '上传时间',
    mirror_name: '镜像名称',
    mirrorSize: '镜像大小',
    mirror_version: '镜像版本',
    deploy_status: '部署状态',
    container_name: '容器名称',
    manufacturers: '厂商',
    vesselName: '容器名称',
    running_status: '运行状态',
    releaseVersion: '发布版本',
    startTime: '启动时间',
    stop_time: '停止时间',
    status: '应用状态',
    running: '运行中',
    stopped: '已停止',
    offline: '设备离线',
    releaseTime: '发布时间',
    completeTime: '完成时间',
    deployTime: '部署时间',
    deployAgain: '重新部署',
    confirmDeploy: '确认部署',
    version: '版本',
    cpu: '分配CPU',
    memory: '分配内存',
    disk: '分配磁盘',
    edit: '容器编辑',
    config: '容器配置',
    rules: {
      name_not_empty: '请输入容器名称'
    },
    run: {
      rules: {
        only_number: '只能输入正整数',
        name_pattern: '请输入4-32字符，允许输入字母、数字、特殊符号（`/`、`- `），且必须以字母开头',
        cpu_not_empty: '请输入CPU个数',
        cpu_pattern: 'CPU取值范围为1~4的整数',
        memory_not_empty: '请输入分配内存大小',
        disk_not_empty: '请输入分配磁盘大小',
        cpu_rule: '请输入整型数字, 取值范围为[1,4]'
      },
      tips: {
        confirm: {
          uninstall: '您确认需要卸载此容器？',
          stop: '您确认需要停止此容器？',
          restartTips: '您确认需要重启此容器？'
        }
      }
    }
  },
  app: {
    type: '设备类型',
    model: '产品型号',
    query: '查询',
    latestVersion: '最新版本',
    appSize: '应用大小',
    uploadTime: '上传时间',
    appName: '应用名称',
    manufacturers: '厂商',
    deploy: '部署',
    mirroringName: '镜像名称',
    vesselName: '容器名称',
    releaseVersion: '发布版本',
    startTime: '启动时间',
    stopTime: '停止时间',
    status: '应用状态',
    running: '运行中',
    stopped: '已停止',
    offline: '设备离线',
    releaseTime: '发布时间',
    completeTime: '完成时间',
    deployAgain: '重新部署',
    version: '应用版本'
  },
  footer: {
    copyright: '鼎桥通信技术有限公司  版权所有  京ICP备案13003079号'
  },
  table: {
    filter: '条件查询'
  }
}
