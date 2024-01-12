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



//   // studyMinutesで昇順にソートされた生徒リスト
// const sortedStudentsByMinutesAsc: User[] = sortStudents(studentList, "studyMinutes");

// // scoreで降順にソートされた生徒リスト
// const sortedStudentsByScoreDesc: User[] = sortStudents(studentList, "score", false);

// console.log(sortedStudentsByMinutesAsc);
// console.log(sortedStudentsByScoreDesc);


  return (
    <div>
      <div className='profile_tabs'>
              <Tabs>
                <TabList className="tablist">
                  <Tab><h3>ユーザー一覧</h3></Tab>
                  <Tab><h3>生徒のみ</h3></Tab>
                  <Tab><h3>メンターのみ</h3></Tab>
                </TabList>

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
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強時間(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>課題番号(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強中の言語(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ハピネススコア(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>対応可能なメンター（課題番号が、担当範囲に含まれているメンターの名前を表示）</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>現場で使っている言語(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号初め(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号終わり(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>対応可能な生徒（課担当範囲に含んでいる生徒の名前を表示）(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </TabPanel>
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
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強時間(生徒のみ)</th>
                            <td>{user.studyMinutes}</td>
                          </tr>
                          <tr>
                            <th>課題番号(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強中の言語(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ハピネススコア(生徒のみ)</th>
                            <td>{user.score}</td>
                          </tr>
                          <tr>
                            <th>対応可能なメンター（課題番号が、担当範囲に含まれているメンターの名前を表示）</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>現場で使っている言語(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号初め(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号終わり(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>対応可能な生徒（課担当範囲に含んでいる生徒の名前を表示）(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </TabPanel>
                <TabPanel>
                  {mentorList.map((user) => (
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
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>郵便番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>電話番号</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>趣味</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ホームページ</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強時間(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>課題番号(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>勉強中の言語(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>ハピネススコア(生徒のみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>対応可能なメンター（課題番号が、担当範囲に含まれているメンターの名前を表示）</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>実務経験月数(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>現場で使っている言語(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号初め(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>担当できる課題番号終わり(メンターのみ)</th>
                            <td>{user.role}</td>
                          </tr>
                          <tr>
                            <th>対応可能な生徒（課担当範囲に含んでいる生徒の名前を表示）(メンターのみ)</th>
                            <td>{user.role}</td>
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
