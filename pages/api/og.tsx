import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default async function handler(request: NextRequest) {
    try {
        const fontData = await fetch(
            new URL('../../public/NotoSerifCJKsc-Regular.ttf', import.meta.url),
        ).then((res) => res.arrayBuffer());

        const { searchParams } = new URL(request.url);

        const originalTitle = searchParams.get('title');

        let title = originalTitle;

        if (!title) {
            title = 'A Hugo blog about Charles Chin.';
        } else {
            title = title.slice(0, 100);
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        backgroundColor: 'white',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            alt="eallion"
                            height={256}
                            src="data:image/jpeg;base64,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"                            
                            style={{ margin: '0 60px 0 100px' }}
                            width={256}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginRight: '100px',
                            alignItems: 'flex-start',
                            width: '680px',
                            minWidth: '680px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 48,
                                fontStyle: 'normal',
                                color: 'black',
                                marginTop: 0,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                                marginRight: 'auto',
                            }}
                        >
                            <b>大大的小蜗牛&apos;Blog</b>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 40,
                                fontStyle: 'normal',
                                color: 'black',
                                marginTop: 15,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            <b>《{title}》</b>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 32,
                                fontStyle: 'normal',
                                color: 'dimgray',
                                marginTop: 15,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                                marginLeft: 'auto',
                            }}
                        >
                            <small>- Charles Chin (@eallion)</small>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Noto Serif',
                        data: fontData,
                        style: 'normal',
                    },
                ],
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
