// global.d.ts es a special file. Types added here can be used globally in the project without importing them.


type ConversationType = {
  id: string;
  fullName: string;
  profilePic: string;
}

 type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
  shouldShake?: boolean;
}

type AuthUserType = {
  id: string;
  fullName: string;
  email: string;
  profilePic: string;
  gender: string;
}