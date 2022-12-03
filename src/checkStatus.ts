export default function checkStatus(message?: string) {
    message ? console.log(`%c${message}`, 'color: #00c8ff') : console.log('%cTypeScript is Running!', 'color: #00c8ff');
}