import { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import icon from '../assets/icon.png'
import { Button } from "./Button";
import chatbotlogo from '../assets/chatbot-logo.png'

const initialMsgId = '64e730eb71420674f4d43c75'

const ChatWindow = () => {
  const [popup, setPopup] = useState(false)
  const [chatList, setChatList] = useState([])
  const [requestId, setRequestId] = useState(initialMsgId) // just for button request status

  const fetchMessage = async (id, selectedOption) => {
    try {
      const response = await fetch(`http://localhost:3000/api/messages/${id}`)
      const data = await response.json()

      var newSelectedMsgsList = []
      if(id !== initialMsgId){
        chatList[chatList.length-1].data.optionList = []
        newSelectedMsgsList = [...chatList]
      }
      console.log(chatList)
      newSelectedMsgsList.push({
        "selectedOption": selectedOption || "",
        "data": data,
      })
      setChatList(newSelectedMsgsList)
      setRequestId(id)
  
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMessage(initialMsgId)
  }, [])

  return (
    <>
      <div className='relative text-right mt-[60px] lg:mt-[50px] float-right mr-[21px] w-[4%]'>
        <img src={icon} alt='button' className='cursor-pointer' onClick={() => { setPopup(!popup) }} />
        {popup &&
        <ScrollToBottom className='shadow-white/5 shadow-lg !absolute bottom-[80px] right-[17px] bg-[#1b1b1b] w-[55vh] h-[75vh] xl:w-[100vh] xl:h-[100vh] rounded-xl border border-solid border-[#1f8f6d] pb-14'>
          <div className="my-5">
            <h2 className="text-[#1f8f6d] text-center text-2xl font-bold">Welcome!</h2>
            <p className="text-white text-center text-lg">How may we assist you?</p>
          </div>
          <hr className="mx-5 mb-3" />
          {chatList.map((messageObj, ind) => 
            <div key={ind} className="m-2">
              {messageObj.selectedOption !== "" &&
                <div className='flex justify-end'>
                  <p className='rounded-lg text-[#1f8f6d] bg-white px-3 py-1.5 mb-2 text-left'>
                    {messageObj.selectedOption}
                  </p>
              </div>
              }
              <div className="flex space-x-2 mr-14">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <img src={chatbotlogo} className="w-8 h-8 object-contain rounded-full" alt="" />
                </div>
                <p className="w-fit mb-1.5 text-left px-3 py-1.5 rounded-lg text-white bg-[#1f8f6d]">{messageObj.data.message}</p>
              </div>
              <div className='ml-10 flex flex-col w-fit space-y-1.5'>
                {messageObj.data.optionList.map((listItem, idx) => 
                  <Button
                    className="text-left"
                    key={idx}
                    onClick={() => {
                      fetchMessage(listItem.nextMsgId, listItem.option)
                    }}
                  >
                    {listItem.option}
                  </Button>
                )}
              </div>
            </div>
          )}
          <div className="absolute bottom-0 right-0">
            <Button
              className="mr-2 mb-2 disabled:opacity-50"
              onClick={() => {
                setChatList([])
                fetchMessage(initialMsgId)
              }}
              disabled={requestId === initialMsgId}
            >Start Over??</Button>
          </div>
        </ScrollToBottom>
        }
      </div>
    </>
  )
}

export default ChatWindow
