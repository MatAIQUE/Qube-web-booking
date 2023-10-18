import fourhours from '../assets/img/keep-images/fourhours.svg'
import twentyfourhours from '../assets/img/keep-images/twentyfourhours.svg'
import oneweek from '../assets/img/keep-images/oneweek.svg'
import onemonth from '../assets/img/keep-images/onemonth.svg'

const KeepDuration = [

    {
        durationCode: '1',
        image: fourhours,
        durationName: '4 hours',
        durationDescription: "60 pesos for 4 hours.",
        durationDescription1: "10 pesos per succeeding.",
        durationDescription2: "24 hours maximum."
       
    },
    {
        durationCode: '2',
        image: twentyfourhours,
        durationName: '1 day',
        durationDescription: "200 per day",
        durationDescription1: "7 days maximum"
       
    },
    {
        durationCode: '3',
        image: oneweek,
        durationName: '1 week',
        durationDescription: "1,300 per week.",
        durationDescription1: "4 weeks maximum"
       
    },
    {
        durationCode: '4',
        image: onemonth,
        durationName: '1 month',
        durationDescription: "4,500 straight-payment"
       
    },
]

export default KeepDuration