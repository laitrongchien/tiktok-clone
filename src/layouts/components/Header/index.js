import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/index';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Trung Quốc',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Hindi',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Pháp',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Nga',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Ả Rập',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Bồ Đào Nha',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Nhật',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Thái',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Indonesia',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Latinh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Đức',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Thổ Nhĩ Kì',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Ba Tư',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Tây Ban Nha',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Bengal',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Ý',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Ngô',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Mường',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Tày',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Dao',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Ai Cập',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Hán',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@chien',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>10</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCrs597GwCa4c88W9CSnG7W-Xwz765dGUiw&usqp=CAU"
                                alt="Chien LT"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
