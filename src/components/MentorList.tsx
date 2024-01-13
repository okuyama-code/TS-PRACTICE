import React, { useState } from 'react'
import { User } from '../types';
import { USER_LIST } from '../userListData';

const MentorList = () => {
  const [ascending, setAscending] = useState(true);
  const mentorList: User[] = USER_LIST.filter((user) => user.role === "mentor")
  const [sortedMentors, setSortedMentors] = useState(mentorList);



  const handleSortMentorToggle = () => {
    setAscending((prevAscending) => !prevAscending);
    const newSortedMentors = sortMentor(mentorList, !ascending);
    setSortedMentors(newSortedMentors);
  };

  // sortする関数


  const sortMentor = (mentors: User[],  ascending: boolean = true): User[] => {
    const sortedMentors = [...mentors]

    sortedMentors.sort((a, b) => {
      const valueA =  a.experienceDays ?? 0
      const valueB = b.experienceDays ?? 0

      return ascending ? valueA - valueB : valueB - valueA
    })

    return sortedMentors
  }


  return (
    <div>
      <button onClick={handleSortMentorToggle} className='sortBtn'>scoreでソートする</button>
      <p>{ascending ? "昇順" : "降順"}</p>
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
    </div>
  )
}

export default MentorList
