import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Users from './components/Users';
import StudentList from './components/StudentList';
import MentorList from './components/MentorList';



const Main: React.FC<{}> = () => {

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
                  <Users />
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
