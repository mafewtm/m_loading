fx_version 'cerulean'
game 'gta5'

author 'mafewtm'
description 'm_loading'
repository 'https://github.com/MafewTM/m_loading'
version '1.0.0'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

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