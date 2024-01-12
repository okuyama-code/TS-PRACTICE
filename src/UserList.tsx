import React, { useState } from 'react'
import { USER_LIST } from './userListData'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { User } from './types';



const UserList: React.FC<{}> = () => {

  const studentList: User[] = USER_LIST.filter((user) => user.role === "student")

  const mentorList: User[] = USER_LIST.filter((user) => user.role === "mentor")

  const [ascending, setAscending] = useState(true);
  const [sortedStudents, setSortedStudents] = useState(studentList);
  const [sortedMentors, setSortedMentors] = useState(mentorList);

  // 生徒をscoreでソート
  const handleSortToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedStudents = sortStudents(studentList, "score", !ascending);
    setSortedStudents(newSortedStudents);
  };

  const handleSortStudyMinutesToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedStudents = sortStudents(studentList, "studyMinutes", !ascending);
    setSortedStudents(newSortedStudents);
  };

  const handleSortMentorToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedMentors = sortMentor(mentorList, !ascending);
    setSortedMentors(newSortedMentors);
  };

  // sortする関数
  const sortStudents = (students: User[], sortBy: string, ascending: boolean = true): User[] => {
    // 引数で渡ってきた配列を複製
    const sortedStudents = [...students];

    sortedStudents.sort((a, b) => {
      const valueA = sortBy === "studyMinutes" ? a.studyMinutes ?? 0  : a.score ?? 0 ;
      const valueB = sortBy === "studyMinutes" ? b.studyMinutes ?? 0  : b.score ?? 0 ;

      return ascending ? valueA - valueB : valueB - valueA
    })

    return sortedStudents;
  }

  const sortMentor = (mentors: User[],  ascending: boolean = true): User[] => {
    const sortedMentors = [...mentors]

    sortedMentors.sort((a, b) => {
      const valueA =  a.experienceDays ?? 0
      const valueB = b.experienceDays ?? 0

      return ascending ? valueA - valueB : valueB - valueA
    })

    return sortedMentors
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
                  {USER_LIST.map((user) => (
                    <div>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <td>{user.id}</td>
                          </tr>
                          <tr>
                            <th>名前</th>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <th>ロール</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>メールアドレス</th>
                            <td>{user.email}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.age}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.postCode}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.phone}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.hobbies?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.url}</td>
                          </tr>
                          <tr>
                            <th>勉強時間(生徒のみ)</th>
                            <td>{user.studyMinutes}</td>
                          </tr>
                          <tr>
                            <th>課題番号(生徒のみ)</th>
                            <td>{user.taskCode}</td>
                          </tr>
                          <tr>
                            <th>勉強中の言語(生徒のみ)</th>
                            <td>{user.studyLangs?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>ハピネススコア(生徒のみ)</th>
                            <td>{user.score}</td>
                          </tr>
                          {/* TODO */}
                          <tr>
                            <th>対応可能なメンター（課題番号が、担当範囲に含まれているメンターの名前を表示）</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.experienceDays}</td>
                          </tr>
                          <tr>
                            <th>現場で使っている言語(メンターのみ)</th>
                            <td>{user.useLangs?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号初め(メンターのみ)</th>
                            <td>{user.availableStartCode}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号終わり(メンターのみ)</th>
                            <td>{user.availableEndCode}</td>
                          </tr>
                          {/* TODO */}
                          <tr>
                            <th>対応可能な生徒（課担当範囲に含んでいる生徒の名前を表示）(メンターのみ)</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </TabPanel>

                {/* 生徒一覧 */}
                <TabPanel>
                  <button onClick={handleSortToggle}>scoreでソートする</button>
                  <button onClick={handleSortStudyMinutesToggle}>StudyMinutesでソートする</button>
                  <p>{ascending ? "昇順" : "降順"}</p>
                  {sortedStudents.map((user) => (
                    <div>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <td>{user.id}</td>
                          </tr>
                          <tr>
                            <th>名前</th>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <th>ロール</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>メールアドレス</th>
                            <td>{user.email}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.age}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.postCode}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.phone}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.hobbies?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.url}</td>
                          </tr>
                          <tr>
                            <th>勉強時間</th>
                            <td>{user.studyMinutes}</td>
                          </tr>
                          <tr>
                            <th>課題番号</th>
                            <td>{user.taskCode}</td>
                          </tr>
                          <tr>
                            <th>勉強中の言語</th>
                            <td>{user.studyLangs?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>ハピネススコア</th>
                            <td>{user.score}</td>
                          </tr>
                          {/* TODO */}
                          <tr>
                            <th>対応可能なメンター（課題番号が、担当範囲に含まれているメンターの名前を表示）</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </TabPanel>

                {/* メンター一覧 */}
                <TabPanel>
                <p>{ascending ? "昇順" : "降順"}</p>
                <button onClick={handleSortMentorToggle}>scoreでソートする</button>
                  {sortedMentors.map((user) => (
                    <div>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <td>{user.id}</td>
                          </tr>
                          <tr>
                            <th>名前</th>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <th>ロール</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>メールアドレス</th>
                            <td>{user.email}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.age}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.postCode}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.phone}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.hobbies?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.url}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数</th>
                            <td>{user.experienceDays}</td>
                          </tr>
                          <tr>
                            <th>現場で使っている言語</th>
                            <td>{user.useLangs?.join(', ')}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号初め</th>
                            <td>{user.availableStartCode}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号終わり</th>
                            <td>{user.availableEndCode}</td>
                          </tr>
                          {/* TODO  */}
                          <tr>
                            <th>対応可能な生徒（課担当範囲に含んでいる生徒の名前を表示）(メンターのみ)</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </TabPanel>

              </Tabs>
            </div>

    </div>
  )
}

export default UserList
