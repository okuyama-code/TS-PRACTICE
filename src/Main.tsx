import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StudentList from './components/StudentList';
import MentorList from './components/MentorList';
import { USER_LIST } from './userListData';
import { v4 as uuidv4 } from 'uuid';
import { User } from './types';
import UserList from './components/UserList';




const Main: React.FC<{}> = () => {
  // 新規作成のところ
  const [users, setUsers] = useState(USER_LIST);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");
  const [url, setUrl] = useState("");
  const [studyMinutes, setStudyMinutes] = useState(0);
  const [taskCode, setTaskCode] = useState(101);
  const [studyLangs, setStudyLangs] = useState([]);
  const [studyLang1, setStudyLang1] = useState("");
  const [studyLang2, setStudyLang2] = useState("");
  const [studyLang3, setStudyLang3] = useState("");
  const [score, setScore] = useState(0);



  const addStudents = () => {
    const hobbies = [hobby1, hobby2, hobby3]
    setHobbies(hobbies)
    const newUsers: User[] = [...users, {id: uuidv4(), name: name, role: "student", email: email, age: age, postCode: postCode, phone: phone, hobbies: [hobby1, hobby2, hobby3], url: url, studyMinutes: studyMinutes, taskCode: taskCode, studyLangs: [studyLang1, studyLang2, studyLang3], score: score}]
    setUsers(newUsers)
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    addStudents();
  }




  // mentorのavailableStartCode, availableEndCodeの数字の範囲の配列を作成する
  const generateAvailableCodeRange = (startCode: number, endCode: number): number[] => {
    const codeRange: number[] = [];

    for (let i = startCode; i <= endCode; i++) {
      codeRange.push(i);
    }
    return codeRange
  }

  const resultArray: number[] = generateAvailableCodeRange(103, 408);

  // 一致する数字を取得できた。ここで取得できた数字がtaskcodeと一致する生徒を取得し配列なら配列にする
  const matchingNumbers: number[] = resultArray.filter((number) => number === 203);

  console.log(resultArray)
  console.log(matchingNumbers[0]) //203

  // TODO　こんな感じで作る　まだ途中
  // const filteredMentors = USER_LIST.filter(
  //   (user) =>
  //     user.role === 'mentor' &&
  //     user.availableStartCode !== undefined &&
  //     user.availableEndCode !== undefined &&
  //     user.availableStartCode <= 408 &&
  //     user.availableEndCode >= 103 &&
  //     USER_LIST.find((student) => student.role === 'student' && student.taskCode === user.taskCode)
  // );


  return (
    <div>
      <div className='profile_tabs'>
              <Tabs>
                <TabList className="tablist">
                  <Tab><h3>ユーザー一覧</h3></Tab>
                  <Tab><h3>生徒のみ</h3></Tab>
                  <Tab><h3>メンターのみ</h3></Tab>
                </TabList>

                {/* ユーザー一覧 */}
                <TabPanel className="tabPanel">
                  <form>
                    <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={age} placeholder='text' onChange={(e) => setAge(Number(e.target.value))} />
                    <input type="text" value={postCode} placeholder='郵便番号' onChange={(e) => setPostCode(e.target.value)} />
                    <input type="text" value={phone} placeholder='phone' onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" value={hobby1} placeholder='hobby1' onChange={(e) => setHobby1(e.target.value)} />
                    <input type="text" value={hobby2} placeholder='hobby2' onChange={(e) => setHobby2(e.target.value)} />
                    <input type="text" value={hobby3} placeholder='hobby3' onChange={(e) => setHobby3(e.target.value)} />
                    <input type="text" value={url} placeholder='url' onChange={(e) => setUrl(e.target.value)} />
                    <div className='input_area'>
                      <label htmlFor="taskCode">taskCode 課題番号(101~401)</label>
                      <input type="text" value={taskCode} placeholder='taskCode' onChange={(e) => setTaskCode(Number(e.target.value))} />
                    </div>

                    <div className='input_area'>
                      <label htmlFor="">studyMinutes</label>
                      <input type="text" value={studyMinutes} placeholder='studyMinutes number' onChange={(e) => setStudyMinutes(Number(e.target.value))} />
                    </div>
                    <input type="text" value={studyLang1} placeholder='studyLang1' onChange={(e) => setStudyLang1(e.target.value)} />
                    <input type="text" value={studyLang2} placeholder='studyLang3' onChange={(e) => setStudyLang2(e.target.value)} />
                    <input type="text" value={studyLang3} placeholder='studyLang3' onChange={(e) => setStudyLang3(e.target.value)} />
                    <input type="text" value={score} placeholder='score number' onChange={(e) => setScore(Number(e.target.value))} />
                    <button onSubmit={handleSubmit}>ユーザー追加</button>
                  </form>
                  <UserList />
                </TabPanel>

                {/* 生徒一覧 */}
                <TabPanel>
                  <StudentList />
                </TabPanel>

                {/* メンター一覧 */}
                <TabPanel>
                  <MentorList />
                </TabPanel>
              </Tabs>
            </div>
    </div>
  )
}

export default Main
