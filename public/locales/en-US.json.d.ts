interface EnUS {
  langCode: 'en-US',
  langName: 'English (US)',
  pages: {
    content: {
      features: {
        videoHistory: {resumePrompt: {close: 'Close'}, resumeButton: 'Resume'},
        screenshotButton: {copiedToClipboard: 'Screenshot copied to clipboard', label: 'Screenshot'},
        loopButton: {label: 'Loop'},
        maximizePlayerButton: {label: 'Maximize'},
        featureMenu: {label: 'Feature menu'}
      }
    },
    options: {
      notifications: {
        success: {saved: 'Options saved.'},
        error: {
          playerQuality: 'You must select a player quality if you want to enable the automatic quality feature.'
        },
        info: {
          reset: 'All options have been reset to their default values.\nYou can now save the changes by clicking the "Confirm" button or discard them by closing this page or ignore this notification.'
        }
      }
    }
  },
  settings: {
    sections: {
      importExportSettings: {
        title: 'Import/Export Settings',
        importButton: {
          error: {
            validation: 'Error importing settings. Please check the file format.\n{{ERROR_MESSAGE}}',
            unknown: 'Error importing settings. Please check the file format.\nAn unknown error occurred.'
          },
          success: 'Settings imported successfully',
          title: 'Import settings from a JSON file',
          value: 'Import Settings'
        },
        exportButton: {
          success: 'Settings successfully exported',
          title: 'Export settings to a JSON file',
          value: 'Export Settings'
        }
      },
      miscellaneous: {
        title: 'Miscellaneous settings',
        features: {
          rememberLastVolume: {
            title: 'Remembers the volume you were watching at and sets it as the volume when you open a new video',
            label: 'Remember last volume'
          },
          maximizePlayerButton: {
            title: 'Fills the video to the window size',
            label: 'Enable maximize player button'
          },
          videoHistory: {
            title: 'Keeps track of where you left off on videos you were watching and asks if you want to resume when that video loads again',
            label: 'Enable video history'
          },
          remainingTime: {
            title: 'Shows the remaining time of the video you\'re watching',
            label: 'Enable remaining time'
          },
          loopButton: {
            title: 'Adds a button to the player to loop the video you\'re watching',
            label: 'Enable loop button'
          },
          hideScrollbar: {title: 'Hides the pages scrollbar', label: 'Enable hide scrollbar'}
        }
      },
      scrollWheelVolumeControl: {
        title: 'Scroll wheel volume control settings',
        enable: {
          title: 'Lets you use the scroll wheel to control the volume of the video you\'re watching',
          label: 'Enable scroll wheel volume control'
        },
        osdColor: {title: 'The color of the On Screen Display', label: 'OSD color'},
        osdType: {title: 'The type of On Screen Display', label: 'OSD type'},
        osdPosition: {title: 'The position of the On Screen Display', label: 'OSD position'},
        osdOpacity: {title: 'The opacity of the On Screen Display', label: 'OSD opacity'},
        osdVolumeAdjustmentSteps: {title: 'The amount to adjust volume per scroll', label: 'Amount to adjust'},
        osdHide: {
          title: 'The amount of milliseconds to wait before hiding the OSD',
          label: 'Time to hide'
        },
        osdPadding: {
          title: 'The amount of padding to add to the OSD (in pixels, only applies to corner OSD)',
          label: 'Padding'
        },
        onScreenDisplay: {
          colors: {
            red: 'Red',
            green: 'Green',
            blue: 'Blue',
            yellow: 'Yellow',
            orange: 'Orange',
            purple: 'Purple',
            pink: 'Pink',
            white: 'White'
          },
          position: {
            top_left: 'Top Left',
            top_right: 'Top Right',
            bottom_left: 'Bottom Left',
            bottom_right: 'Bottom Right',
            center: 'Center'
          },
          type: {no_display: 'No display', text: 'Text', line: 'Line', round: 'Round'}
        }
      },
      automaticQuality: {
        title: 'Automatic quality settings',
        enable: {
          title: 'Automatically adjusts the video quality to the selected level.',
          label: 'Enable automatic quality adjustment'
        },
        select: {label: 'Player quality', title: 'The quality to set the video to'}
      },
      playbackSpeed: {
        title: 'Playback speed settings',
        enable: {
          title: 'Sets the video speed to what you choose below',
          label: 'Enable forced playback speed'
        },
        select: {label: 'Player speed', title: 'The speed to set the video to'}
      },
      volumeBoost: {
        title: 'Volume boost settings',
        enable: {
          title: 'Boosts the volume of the video you\'re watching',
          label: 'Enable volume boost'
        },
        number: {label: 'Volume boost amount (dB)', title: 'The amount to boost the volume by'}
      },
      screenshotButton: {
        title: 'Screenshot settings',
        enable: {
          title: 'Adds a button to the player to take a screenshot of the video',
          label: 'Enable screenshot button'
        },
        selectSaveAs: {label: 'Screenshot save type', title: 'The screenshot save type'},
        selectFormat: {label: 'Screenshot format', title: 'The format to save the screenshot in'},
        format: {png: 'PNG', jpeg: 'JPEG', webp: 'WebP'},
        saveAs: {file: 'File', clipboard: 'Clipboard'}
      },
      bottomButtons: {
        confirm: {title: 'Confirm setting reset', value: 'Confirm'},
        clear: {
          title: 'Clears all data this extension has stored on your machine',
          value: 'Clear Data'
        },
        reset: {
          title: 'Resets all settings to their defaults, Click the confirm button to save the changes',
          value: 'Reset'
        }
      },
      language: {
        title: 'Language',
        select: {label: 'Language', title: 'The language to use for the extension'}
      }
    },
    clearData: {
      confirmAlert: 'This will delete all extension data related to options. Continue?',
      allDataDeleted: 'All data has been deleted.'
    }
  },
  messages: {
    settingVolume: 'Setting volume boost to {{VOLUME_BOOST_AMOUNT}}',
    resumingVideo: 'Resuming video at {{VIDEO_TIME}}'
  }
}

declare const EnUS: EnUS;

export = EnUS;