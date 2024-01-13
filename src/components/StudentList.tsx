import React, { useState } from 'react'
import { USER_LIST } from '../userListData';
import { User } from '../types';

const StudentList = () => {
  const students: User[] = USER_LIST.filter((user) => user.role === "student")
  const [ascending, setAscending] = useState(true);
  const [sortedStudents, setSortedStudents] = useState(students);

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

   // 生徒をscoreでソート
   const handleSortToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedStudents = sortStudents(students, "score", !ascending);
    setSortedStudents(newSortedStudents);
  };

  const handleSortStudyMinutesToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedStudents = sortStudents(students, "studyMinutes", !ascending);
    setSortedStudents(newSortedStudents);
  };

  return (
    <div>
      <button onClick={handleSortToggle} className='sortBtn'>scoreでソートする</button>
      <button onClick={handleSortStudyMinutesToggle}className='sortBtn'>StudyMinutesでソートする</button>
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
    </div>
  )
}

export default StudentList
