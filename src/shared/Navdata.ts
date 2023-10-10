import * as icons from './imageExports'
// import {v4 as uuidv4 } from 'uuid';

interface NavInfo{
    Link: string,
    icon: string,
    iconInfo: string
}



export const Customers: NavInfo[] = [
    {
    
    Link: 'user',
    icon:icons.User,
    iconInfo:'Users'
    },
    {
    Link: '/null',
    icon:icons.Users,
    iconInfo:'Guarantors'
    },
    {
    icon: icons.Loan,
    Link: '/null',
    iconInfo:'Loans'
    },
    {
    icon:icons.Handshake,
    Link: '/null',
    iconInfo:'Decision Models'
    },
    {
    icon: icons.Bank,
    Link: '/null',
    iconInfo:'Savings'
    },
    {
    icon:icons.LoanRequest,
    Link: '/null',
    iconInfo:'Loan Requests'
    },
    {
    icon:icons.UserCheck,
    Link: '/null',
    iconInfo:'Whitelist'
    },
    {
    icon: icons.UserTimes,
    Link: '/null',
    iconInfo:'Karma'
    },
]

export const Business: NavInfo[] = [
    {
        icon: icons.Briefcase,
        Link: '/null',
        iconInfo: 'Organization'
    },
    {
        icon: icons.LoanRequest,
        Link: '/null',
        iconInfo: 'Loan Products'
    },
    {
        icon: icons.Savings,
        Link: '/null',
        iconInfo: 'Savings Products'
    },
    {
        icon: icons.Fees,
        Link: '/null',
        iconInfo: 'Fees and Charges'
    },
    {
        Link: '/null',
        icon: icons.Transactions,
        iconInfo: 'Transactions'
    },
    {
        Link: '/null',
        icon: icons.Galaxy,
        iconInfo: 'Services'
    },
    {
        Link: '/null',
        icon: icons.ServiceAcc,
        iconInfo: 'Service Account'
    },
    {
        Link: '/null',
        icon: icons.Settlements,
        iconInfo: 'Settlements'
    },
    {
        Link: '/null',
        icon: icons.Reports,
        iconInfo: 'Reports'
    }
]

export const Settings: NavInfo[] =[
    {
        Link: '/null',
        icon: icons.Preferences,
        iconInfo: 'Preferences'
    },
    {
        Link: '/null',
        icon: icons.FeesAndP,
        iconInfo: 'Fees and Pricing'
    },
    {
        Link: '/null',
        icon: icons.Clipboard,
        iconInfo: 'Audit Logs'
    },
]