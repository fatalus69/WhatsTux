import { isPermissionGranted } from '@tauri-apps/api/notification';
const permissionGranted = await isPermissionGranted();

import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === 'granted';
}
if (permissionGranted) {
    sendNotification('You got a new Message!');
    sendNotification({ title: 'WhatsTux', body: 'You got a new Message!' });
}