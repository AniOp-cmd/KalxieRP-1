KRPCore = nil

TriggerEvent('krp:getSharedObject', function(obj) KRPCore = obj end)


RegisterServerEvent('oxydelivery:server')
AddEventHandler('oxydelivery:server', function(money)
    local source = source
    local xPlayer = KRPCore.GetPlayerFromId(source)
    if xPlayer.getMoney() >= money then
        xPlayer.removeMoney(money)
        TriggerClientEvent('oxydelivery:startDealing', source)
        TriggerClientEvent('oxydelivery:client', source)
    else
        TriggerClientEvent('DoLongHudText', source, 'You do not have enough money to start', 2)
    end
end)