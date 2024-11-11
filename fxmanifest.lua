fx_version 'cerulean'
game 'gta5'

author 'mafewtm'
name 'm_loading'
description 'Just a simple React loading screen'
repository 'https://github.com/mafewtm/m_loading'
version '1.2.2'

server_script 'server/main.lua'

files {
	'web/build/index.html',
	'web/build/assets/*.*'
}

loadscreen 'web/build/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

lua54 'yes'
use_experimental_fxv2_oal 'yes'