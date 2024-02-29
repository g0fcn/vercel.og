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
                            src=data:image/octet-stream;base64,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"                            
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
                            <b>果粉圈&apos;Blog</b>
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
