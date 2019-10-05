export const demoUserData = {
  name: "Ric",
  level: "consultant",
  role: "FED",
  team: "Channels?",
  SBU: "Digital",
  company: "Deloitte",
  lastLogin: ""
};

export const getUserData = () => {
  return new Promise(res => {
    setTimeout(() => res(demoUserData), 1500);
  });
};
