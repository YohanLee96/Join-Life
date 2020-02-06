import axios from "axios";

const getUserInfo = (uid, password) => {
  alert('getUserInfo');
  return axios.post("/api/login", {
    params: {
      uid: uid,
      password: password
    }
  });
};

const isFinished = uid => {
  alert("isFinished");
  return axios.get("/api/login", {
    params: {
      uid: uid
    }
  });
};

export default {
  async login(uid, password) {
    try {
          const getUserInfoPromise = await getUserInfo(uid, password);

          console.log("getUserInfoPromise : " + getUserInfoPromise);
          // Promise.all의 예시를 위해 집어넣음
          const isFinishedPromise = await isFinished(uid);
          console.log("isFinishedPromise : " + getUserInfoPromise);
          const [userInfoResponse, isFinishedResponse] = await Promise.all([
            getUserInfoPromise,
            isFinishedPromise
          ]);
          // 로그인 결과에 따른 분기 처리를 해준다
          if (userInfoResponse.data.length === 0) return "noAuth";
          if (isFinishedResponse.data[0].CNT > 0) return "done";
          alert(userInfoResponse);

          return userInfoResponse;

        } 
    catch (err) {
      console.error(err);
    }
  }
};
