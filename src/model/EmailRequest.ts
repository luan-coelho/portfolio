export default interface EmailRequest {
  ownerRef: string;
  emailTo: string;
  subject: string;
  text: string;
  emailType: string;
}
