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
  // TODO配列はどのようにinputで入力するのだろう？
  const [hobbies, setHobbies] = useState([]);
  // const [hobbies, setHobbies] = useState("");
  const [url, setUrl] = useState("");
  const [studyMinutes, setStudyMinutes] = useState(0);
  const [taskCode, setTaskCode] = useState(0);
  const [studyLangs, setStudyLangs] = useState([]);
  // const [studyLangs, setStudyLangs] = useState("");
  const [score, setScore] = useState(0);



  const addStudents = () => {
    const newUsers: User[] = [...users, {id: uuidv4(), name: name, role: "student", email: email, age: age, postCode: postCode, phone: phone, hobbies: hobbies, url: url, studyMinutes: studyMinutes, taskCode: taskCode, studyLangs: studyLangs, score: score}]
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
