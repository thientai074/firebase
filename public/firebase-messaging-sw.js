importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAZSta2NbOIp7ri-NXhhjvYdO8EmpVjSyE',
  authDomain: 'onemail-notification.firebaseapp.com',
  projectId: 'onemail-notification',
  storageBucket: 'onemail-notification.appspot.com',
  messagingSenderId: '440022663483',
  appId: '1:440022663483:web:e7298614b24f6c774bf71e',
  measurementId: 'G-4M8HHRZK3W',
});

const messaging = firebase.messaging();
let hasData = false;

self.addEventListener('push', (event) => {
  // Kiểm tra giá trị của hasData trước khi xử lý sự kiện push
  hasData = true;
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: data.icon,
  });

});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  if(!hasData) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  }
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

});


