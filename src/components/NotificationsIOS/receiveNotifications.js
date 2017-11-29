import NotificationsIOS from 'react-native-notifications'

class receiveNotifications extends Component {
    constructor() {
        super();
        NotificationsIOS.addEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
        NotificationsIOS.addEventListener('notificationReceivedBackground', this.onNotificationReceivedBackground.bind(this));
        NotificationsIOS.addEventListener('notificationOpened', this.onNotificationOpened.bind(this));
    }

    onNotificationReceivedForeground(notification) {
        console.log("Notification Received - Foreground", notification);
    }

    onNotificationReceivedBackground(notification) {
        console.log("Notification Received - Background", notification);
    }

    onNotificationOpened(notification) {
        console.log("Notification opened by device user", notification);
    }

    componentWillUnmount() {
        // Don't forget to remove the event listeners to prevent memory leaks!
        NotificationsIOS.removeEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
        NotificationsIOS.removeEventListener('notificationReceivedBackground', this.onNotificationReceivedBackground.bind(this));
        NotificationsIOS.removeEventListener('notificationOpened', this.onNotificationOpened.bind(this));
    }
}