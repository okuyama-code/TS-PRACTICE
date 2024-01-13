import React from 'react'
import { USER_LIST } from '../userListData'

const UserList = () => {
  return (
    <div>
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
                            {/* <td>{user.hobbies?.join(', ')}</td> */}
                            <td>{user.hobbies}</td>
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
                            {/* <td>{user.studyLangs}</td> */}
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
    </div>
  )
}

export default UserList
