import React from "react"
import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: 'React là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content() {
    /*const [countDown, setCountDown] = useState(180)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev-1)
            console.log('CountDown...')
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )*/

    /*const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <div>
            <input
            type="file"
            onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
            )}
        </div>
    )*/

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = {{detail}} => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content