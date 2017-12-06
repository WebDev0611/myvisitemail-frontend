export interface IMailchimpReportData {
    abuse_reports: number;
    bounces: IMailchimpBounces;
    campaign_title: string;
    clicks: IMailchimpClicks;
    delivery_status: IMailchimpDeliveryStatus;
    ecommerce: IMailchimpEcommerce;
    emails_sent: number;
    facebook_likes: IMailchimpFacebookLikes;
    forwards: IMailchimpForwards;
    id: string;
    list_id: string;
    list_name: string;
    list_stats: IMailchimpListStats;
    opens: IMailchimpOpens;
    preview_text: string;
    send_time: Date;
    subject_line: string;
    timeseries: IMailchimpTimeseries[];
    type: string;
    unsubscribed: number;
    _links: IMailchimpLinks[];
}

export interface IMailchimpBounces { hard_bounces: number; soft_bounces: number; syntax_errors: number; }
export interface IMailchimpClicks { clicks_total: number; unique_clicks: number; unique_subscriber_clicks: number; click_rate: number; last_click: Date; }
export interface IMailchimpDeliveryStatus { enabled: boolean; }
export interface IMailchimpEcommerce { total_orders: number; total_spent: number; total_revenue: number; }
export interface IMailchimpFacebookLikes { recipient_likes: number; unique_likes: number; facebook_likes: number; }
export interface IMailchimpForwards { forwards_count: number; forwards_opens: number; }
export interface IMailchimpListStats { sub_rate: number; unsub_rate: number; open_rate: number; click_rate: number; }
export interface IMailchimpOpens { opens_total: number; unique_opens: number; open_rate: number; last_open: Date; }
export interface IMailchimpTimeseries {
    emails_sent: number;
    recipients_clicks: number;
    timestamp: Date;
    unique_opens: number;
}
export interface IMailchimpLinks {
    href: string;
    method: string;
    rel: string;
    schema: string;
    targetSchema: string;
}




