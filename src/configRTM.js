import { createChannel, createClient, RtmMessage } from 'agora-rtm-react'
import AgoraRTM from 'agora-rtm-sdk'

// const appID =  'd830e79c7c344e31924cc6b372a8e5f5'
const appID = 'a0190bc7d6da4f0abaf82f8f70eefdf3'


// a0190bc7d6da4f0abaf82f8f70eefdf3

// 007eJxTYFimvTq2IO7 / Z57dhx3Wa55at / 1J + P / LsvvEvRzVBLw0098rMCQaGFoaJCWbp5ilJJqkGSQmJaZZGKVZpJkbpKampaQZb5M5l9wQyMjQ8CePkZEBAkF8FoaMzLJUBgYAtfMhVg ==


export const useClientRTM = createClient(appID);

// export const channelName = "main"

export const useChannelRTM = createChannel('main')

export const useClientRTMInstance = AgoraRTM.createInstance(appID)
export const useChannelRTMInstance = useClientRTMInstance.createChannel('main')


const token = "00614d4edd9107f4e0ca7a54ebde7f3dd70IAD/vRuvjihterO9Lg0k427Lp4kfZ9Kpob9DMfxZBHH0e2TNKL8AAAAAIgB0jUCUfNEVYgQAAQB80RViAgB80RViAwB80RViBAB80RVi"