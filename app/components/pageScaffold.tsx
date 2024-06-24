import {useContext, useState} from 'react';
import {FooterComponent} from '~/components/footerComponents';
import {HeaderComponent} from '~/components/headerComponent';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export function PageScaffold({children}: {children: any}) {
    const contentData = useContext(ContentProviderContext);
    const pagesOptions = [
        {
            name: contentData.getContent("727468af-f148-458d-bc97-6c3fcb8c3047"),
            link: contentData.getContent("992861c8-cc68-4f9b-b119-5e4336cf30f8"),
        },
        {
            name: contentData.getContent("8e4c05c6-deee-4c07-b2d4-969b7bb19d9c"),
            link: contentData.getContent("ea05ffb8-0480-439f-8552-55dbbfb676e6"),
        },
        {
            name: contentData.getContent("74897f04-b443-4ae8-9e44-804faf2662c0"),
            link: contentData.getContent("c4fc9e60-ccab-43ae-b9ab-662b5c641895"),
        },
        {
            name: contentData.getContent("da27d46d-6c36-43b4-8548-276b52752797"),
            link: contentData.getContent("443fc295-e2d2-4ef8-9348-01da574512d0"),
        },
        {
            name: contentData.getContent("8b37a786-be17-4997-9e1c-61b3b7da7291"),
            link: contentData.getContent("2a937150-20aa-41c1-8f50-9c789e5cf155"),
        },
        {
            name: contentData.getContent("41d5b5cf-9155-4f5f-b822-2a099a1ca4c5"),
            link: contentData.getContent("744232e4-88ab-4792-96c1-24cb2c80f076"),
        },
        {
            name: contentData.getContent("a97d8143-09ee-4723-a37f-879fde361631"),
            link: contentData.getContent("9bee6b87-be87-474f-b8ef-b2e09a0d1993"),
        },
        {
            name: contentData.getContent("44c3fe2c-0de9-4181-8055-8c5da043dbd7"),
            link: contentData.getContent("e3957e79-7047-40f6-80fa-936ac47cda98"),
        },
        {
            name: contentData.getContent("9400a512-e9c4-42c1-af6f-cf4024e29e0a"),
            link: contentData.getContent("c864a3b2-e000-4bf7-8029-98989fec6142"),
        },
        // {
        //     name: contentData.getContent("f82ffb95-d076-4d4c-be56-204c504db31a"),
        //     link: contentData.getContent("fc5bf2d1-95ac-486a-8c3b-b6eaef01adb6"),
        // },
        {
            name: contentData.getContent("89227a48-9041-45f2-afc1-3e64d13c2d4d"),
            link: contentData.getContent("2210ce84-e029-484a-afc4-d6020f22a345"),
        },
        {
            name: contentData.getContent("5e99e476-bdd0-4795-a545-5fe73c86c92b"),
            link: contentData.getContent("557d35cd-030c-4f7e-be8f-8d7861d6f9d9"),
        },
        {
            name: contentData.getContent("d25433c7-a064-4047-a77b-3bf3422c2633"),
            link: contentData.getContent("0f6004d9-e7f9-495d-8dc5-7154a0eff7b0"),
        },
        {
            name: contentData.getContent("f4bc4689-1ab7-4a0c-92a7-0eedc2681ada"),
            link: contentData.getContent("0c7787c1-6600-4eac-9c4a-8077751b1855"),
        },
        {
            name: contentData.getContent("c0aae03b-94b0-4075-9eb0-09b5b3e69ee0"),
            link: contentData.getContent("2b098eee-9ad2-45e3-bce6-b29e2c8ffceb"),
        },
    ];
    const options = [
        {
            optionList: [
                {
                    title: contentData.getContent("f63c2cee-f793-4e98-8854-c9b3500fdda3"),
                    text: contentData.getContent("3798a7f0-b975-4875-9e0a-91ea88a9c693"),
                    img: contentData.getContent("bb629615-075e-4e83-a201-57254403c357"),
                    link: contentData.getContent("a91dba33-ac34-4206-84df-e4ed83824064"),
                },
                {
                    title: contentData.getContent("070d4d0d-3d69-45a1-8ea5-2f2cce2b6fc2"),
                    text: contentData.getContent("17049759-0fe7-4db2-b68f-bc6fd0773fed"),
                    img: contentData.getContent("61eccd00-b91d-4d29-80e5-26cbab0c1cca"),
                    link: contentData.getContent("5daa6505-3359-43a6-8666-ea447357d1ed"),
                },
                {
                    title: contentData.getContent("0e22ccc5-fbc6-4328-89a8-f6250155d93a"),
                    text: contentData.getContent("b6ced495-27a2-4006-a5d1-c0cf8088746c"),
                    img: contentData.getContent("9d2f6116-5f5f-4831-bcce-e0c373bcaed9"),
                    link: contentData.getContent("354ade57-fd8a-47c3-bfa6-fb67f6e2b403"),
                },
                {
                    title: contentData.getContent("73fa877d-ab25-43f3-82a8-a47358d2254e"),
                    text: contentData.getContent("14cd2491-7200-4635-8cb5-f8ac5e8454bc"),
                    img: contentData.getContent("c44bdc52-53c7-4da4-95b4-67ad250121c6"),
                    link: contentData.getContent("963ec677-f5d8-4294-96cb-d7539c8743ff"),
                },
                {
                    title: contentData.getContent("3d9689ee-f12c-44f2-beee-14ae591829c1"),
                    text: contentData.getContent("44b06ff5-fc4b-4aba-a745-8a68f632f77e"),
                    img: contentData.getContent("7af6bc8a-50e3-478b-9a19-7a1d0502447e"),
                    link: contentData.getContent("ac54ce7e-41d3-42a3-ba63-bdf4eb46ef15"),
                },
                {
                    title: contentData.getContent("1cc5b3f3-fb63-4334-93ec-e622bf7a1052"),
                    text: contentData.getContent("3470e2f5-f964-4336-a88a-0af0fed65c18"),
                    img: contentData.getContent("b9956b4f-491e-4b67-a37a-ce06dcff7d02"),
                    link: contentData.getContent("be14d52c-6bd6-4ec6-aeeb-2f9aaad6b04a"),
                },
            ],
            sideContent: {
                image: contentData.getContent("94f9aec1-3556-4189-a8f9-60b32ac24f5c"),
                title: contentData.getContent("286c6d9f-a5f6-4408-aeb3-4a4527ee73ac"),
                buttonText: contentData.getContent("64192f06-3c81-473d-87d6-dd63447e8e60")
            }
        },
        {
            optionList: [
                {
                    title: '',
                    text: "",
                    img: '',
                    link: '',
                },
            ],
            sideContent: {
                image: "",
                title: "",
                buttonText: ""
            }
        },
        {
            optionList: [
                {
                    title: contentData.getContent("caa34a29-503a-45ed-8c9e-92f55edb015e"),
                    text: contentData.getContent("2efddc1d-eb85-46ce-b9e4-5847195ec927"),
                    img: contentData.getContent("fb185d3d-7ad1-4014-bdee-2ddf4279fd71"),
                    link: contentData.getContent("3c651868-9395-428b-a83a-4fd5f0063b36"),
                },
                {
                    title: contentData.getContent("596db541-1ff2-48e8-ade5-4232a615dde1"),
                    text: contentData.getContent("a5c2cde7-0ede-42db-a8c4-119a3ee04a38"),
                    img: contentData.getContent("3e479b62-a4c8-4f28-b07c-20a1ad7acabe"),
                    link: contentData.getContent("f18975d7-9aaa-427d-9d5b-4e82b8a8e211"),
                },
                {
                    title: contentData.getContent("93e8322d-cd4f-47f8-be89-2a7efa46836c"),
                    text: contentData.getContent("844f1931-d383-44ac-bc7e-1d1f0a63b373"),
                    img: contentData.getContent("fe8f6545-ea6f-4b32-aab3-908de3211743"),
                    link: contentData.getContent("85f1f669-f6f0-4556-9d95-1f11a0f52dcf"),
                },
                {
                    title: contentData.getContent("eeb42fad-2b3f-474d-b56f-14925681d40d"),
                    text: contentData.getContent("074da782-deda-4416-a9be-c21760febf61"),
                    img: contentData.getContent("8b90d322-3971-4a46-a053-946a62ba40ef"),
                    link: contentData.getContent("a2cee9b0-80ed-443c-bbec-9f42125c219e"),
                },
                {
                    title: contentData.getContent("89a8e29f-d278-46cc-a1a4-b636e83a024a"),
                    text: contentData.getContent("177cd295-cbfe-4023-a624-1c9557f3d561"),
                    img: contentData.getContent("4653a593-765a-4672-af74-b107ceaf45e1"),
                    link: contentData.getContent("3a84188c-a9a9-4946-8588-b661d64f31ef"),
                },
                {
                    title: contentData.getContent("63be1d2d-bfa2-4ec3-88ae-500d9e7c020b"),
                    text: contentData.getContent("28dae4c0-b5a6-413d-b216-56af78e3402f"),
                    img: contentData.getContent("1c3de5a7-41c9-4a00-bbb2-5c94705b8027"),
                    link: contentData.getContent("094121ca-088b-4eff-9ac8-f70b5a2ebd94"),
                },
                {
                    title: contentData.getContent("601566f5-2c9f-42f0-8b6d-7e72bde709cb"),
                    text: contentData.getContent("d6cee33d-0792-4c83-b48b-dc579437e0d5"),
                    img: contentData.getContent("eafd7f86-3900-4f8f-86b7-72876431245d"),
                    link: contentData.getContent("4b13a078-7d3d-41f2-8f33-93150f476432"),
                },
            ],
            sideContent: {
                image: contentData.getContent("18df915c-5ba3-463d-95a0-ee76713373de"),
                title: contentData.getContent("3e3d01eb-27d7-4e31-b5d9-ab0c1639c880"),
                buttonText: contentData.getContent("e5e0e505-53f5-48c1-94d0-2fbe56e7aa66")
            }
        },
        {
            optionList: [
                {
                    title: contentData.getContent("616b4643-0056-4920-b2d7-1d091afd425e"),
                    text: contentData.getContent("1c90bb02-e4d1-4ef8-8bb9-d2566ed78ab5"),
                    img: contentData.getContent("ea83541a-6a08-41c7-8c7d-9ea9d20d754f"),
                    link: contentData.getContent("e7c9c34a-8f9b-4c8f-ac99-744bd35aa7f0"),
                },
                {
                    title: contentData.getContent("21db7840-59a0-4c64-b929-fcf99e1b2bb3"),
                    text: contentData.getContent("f04c6e63-0cd5-4549-8f32-8cceca47d761"),
                    img: contentData.getContent("47949db9-b9e8-41c4-a9e2-2e162d59f1f8"),
                    link: contentData.getContent("5cfb5bfa-f438-4b2f-95d0-2947ef0312e9"),
                },
                {
                    title: contentData.getContent("b39c29fb-b292-4913-a07e-13c8b10df939"),
                    text: contentData.getContent("091cc93f-f09f-4d1c-9e13-7a147b6da352"),
                    img: contentData.getContent("98eaf6fb-6882-4552-85b4-179d4f632772"),
                    link: contentData.getContent("b08c4ef6-6057-431f-bfe2-1070b1708bed"),
                },
            ],
            sideContent: {
                image: contentData.getContent("e27c3a0a-c414-4f52-adf8-85cb2f7b7736"),
                title: contentData.getContent("d0a6729a-cce8-41f4-acd5-c2062a0b7f0b"),
                buttonText: contentData.getContent("40c6eb90-9ae8-43aa-a3f9-8d7691d172f6")
            }
        },
        {
            optionList:  [
                {
                    title: "",
                    text: "",
                    img: "",
                    link: "",
                },
            ],
            sideContent: {
                image: "",
                title: "",
                buttonText: ""
            }
        },
    ];
    const [showList, setShowList] = useState(Array(options.length +1).fill(false));
    return (
        <>
            <div className="tw-flex tw-flex-col tw-items-stretch tw-min-h-screen">
                <HeaderComponent
                    showList={showList}
                    setShowList={setShowList}
                    options={options}
                    pagesOptions={pagesOptions}
                />

                <div
                    onClick={() => {
                        const newShowList = [...showList];
                        newShowList.map(
                            (item, itemIndex) =>
                                (newShowList[itemIndex] = false),
                        );
                        setShowList(newShowList);
                    }}>
                    {children}
                </div>
                <div className="tw-flex-grow" />

                <div
                    onClick={() => {
                        const newShowList = [...showList];
                        newShowList.map(
                            (item, itemIndex) =>
                                (newShowList[itemIndex] = false),
                        );
                        setShowList(newShowList);
                    }}>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
}
