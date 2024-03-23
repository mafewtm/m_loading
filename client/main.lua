local checkState = false

AddEventHandler('playerSpawned', function()
    if checkState then return end

    ShutdownLoadingScreenNui()
    checkState = true
end)