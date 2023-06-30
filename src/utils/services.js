import svgs from "./svg"
const lockerServices = [
    {
        serviceID: '0001',
        serviceType: "wash",
        serviceDescription: "Simply place your laundry inside the locker and get your laundry even as fast as 5 hours!",
        serviceImage: svgs.washSvg
    },

    {
        serviceID: '0005',
        serviceType: "move",
        serviceDescription: "Place item inside the locker and have it delivered on your preferred location or another locker",
        serviceImage: svgs.moveSvg
    },
    {
        serviceID: '0002',
        serviceType: "drop",
        serviceDescription: "Parcels, orders, and deliveries are now contactless, fast, and secure with Qube Smartlockers",
        serviceImage: svgs.dropSvg
    },
    {
        serviceID: '0003',
        serviceType: "keep",
        serviceDescription: "Keep your item and use it as your own locker for hours, days, weeks, or months!",
        serviceImage: svgs.keepSvg
    },
    {
        serviceID: '0004',
        serviceType: "food",
        serviceDescription: "Enjoying ordering food online? Have it delivered in the locker and pick-up on your chosen time",
        serviceImage: svgs.foodSvg
    }
]

export default lockerServices
