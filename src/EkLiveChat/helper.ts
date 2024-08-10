// time is ago format
export const timeAgo = (timestamp: any) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

  const sec = diffInSeconds;
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);

  if (year > 0) return year === 1 ? '1 year ago' : `${year} years ago`;
  if (month > 0) return month === 1 ? '1 month ago' : `${month} months ago`;
  if (week > 0) return week === 1 ? '1 week ago' : `${week} weeks ago`;
  if (day > 0) return day === 1 ? '1 day ago' : `${day} days ago`;
  if (hr > 0) return hr === 1 ? '1 hour ago' : `${hr} hours ago`;
  if (min > 0) return min === 1 ? '1 min ago' : `${min} mins ago`;
  return sec === 1 ? '1 sec ago' : `${sec} sec ago`;
};

export const appendChatMsg = (msgObj: any, chatData: any) => {
  // Check if channelId exists in any of the objects in the list
  // const exists = chatData?.some(
  //   (item: any) => item.messageId == msgObj.messageId,
  // );
  // console.log('***********', [...chatData, msgObj])
  // If channelId does not exist, append the object to the list
  // if (!exists) return [...chatData, msgObj];
  // else chatData;
  return [...chatData, msgObj]
};
