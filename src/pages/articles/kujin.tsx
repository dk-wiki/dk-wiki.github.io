import { RoundedHorizontal, StableImage } from "@/components/elements/decorators";
import QuickFactsCard from "@/components/elements/quickfacts";
import Paragraph from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection } from "@/components/elements/title";
import KujinFun from "@/components/fun/kujin/fun";

const KujinPage = () => {
    return (
        <div>
            <StableImage src="/media/kakejiku-top.svg" className="w-full kakejiku" />
            <div className="kakejiku" id="kujin-main">
                <div id="kujin-page">
                    <TitleMain>
                        Kujin
                    </TitleMain>
                    <QuickFactsCard
                        imageSrc="/icons/kujin-icon.png"
                        caption="A depiction of Kujin"
                        heightCm={0}
                        weightKg={0}
                        nationality="Japan (Edo)"
                        meta={
                            [
                                { label: "Loves", value: "Origami" },
                            ]
                        }
                        effects={
                            {
                                hueSaturation: [0, -0.3]
                            }
                        }
                    />
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat sem. Duis risus leo, placerat vel enim non, auctor tincidunt nisi. Praesent nec condimentum velit, ac accumsan orci. Mauris id nisi nec nisi ornare porttitor id et ante. Nunc ante felis, molestie vel varius quis, scelerisque id nisi. Ut convallis, neque vel tristique dapibus, magna sem imperdiet ligula, vitae fringilla libero turpis vitae purus. Pellentesque ornare augue sed convallis faucibus. Nam eleifend metus malesuada lacus posuere rutrum. Donec id libero sit amet sapien congue condimentum. Suspendisse in lorem ac justo rhoncus elementum.
                    </Paragraph>
                    <TableOfContents />
                    <RoundedHorizontal tileRound tileSize={20} />
                    <TitleSection>
                        Cool Facts
                    </TitleSection>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat sem. Duis risus leo, placerat vel enim non, auctor tincidunt nisi. Praesent nec condimentum velit, ac accumsan orci. Mauris id nisi nec nisi ornare porttitor id et ante. Nunc ante felis, molestie vel varius quis, scelerisque id nisi. Ut convallis, neque vel tristique dapibus, magna sem imperdiet ligula, vitae fringilla libero turpis vitae purus. Pellentesque ornare augue sed convallis faucibus. Nam eleifend metus malesuada lacus posuere rutrum. Donec id libero sit amet sapien congue condimentum. Suspendisse in lorem ac justo rhoncus elementum.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat sem. Duis risus leo, placerat vel enim non, auctor tincidunt nisi. Praesent nec condimentum velit, ac accumsan orci. Mauris id nisi nec nisi ornare porttitor id et ante. Nunc ante felis, molestie vel varius quis, scelerisque id nisi. Ut convallis, neque vel tristique dapibus, magna sem imperdiet ligula, vitae fringilla libero turpis vitae purus. Pellentesque ornare augue sed convallis faucibus. Nam eleifend metus malesuada lacus posuere rutrum. Donec id libero sit amet sapien congue condimentum. Suspendisse in lorem ac justo rhoncus elementum.
                    </Paragraph>
                    <RoundedHorizontal tileRound tileSize={20} />
                    <TitleSection>
                        More Cool Facts
                    </TitleSection>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat sem. Duis risus leo, placerat vel enim non, auctor tincidunt nisi. Praesent nec condimentum velit, ac accumsan orci. Mauris id nisi nec nisi ornare porttitor id et ante. Nunc ante felis, molestie vel varius quis, scelerisque id nisi. Ut convallis, neque vel tristique dapibus, magna sem imperdiet ligula, vitae fringilla libero turpis vitae purus. Pellentesque ornare augue sed convallis faucibus. Nam eleifend metus malesuada lacus posuere rutrum. Donec id libero sit amet sapien congue condimentum. Suspendisse in lorem ac justo rhoncus elementum.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat sem. Duis risus leo, placerat vel enim non, auctor tincidunt nisi. Praesent nec condimentum velit, ac accumsan orci. Mauris id nisi nec nisi ornare porttitor id et ante. Nunc ante felis, molestie vel varius quis, scelerisque id nisi. Ut convallis, neque vel tristique dapibus, magna sem imperdiet ligula, vitae fringilla libero turpis vitae purus. Pellentesque ornare augue sed convallis faucibus. Nam eleifend metus malesuada lacus posuere rutrum. Donec id libero sit amet sapien congue condimentum. Suspendisse in lorem ac justo rhoncus elementum.
                    </Paragraph>
                    <RoundedHorizontal tileRound tileSize={20} />
                    <KujinFun />
                </div>
            </div>
            <StableImage src="/media/kakejiku-bottom.svg" className="w-full kakejiku" />
        </div>
    )
}

export default KujinPage;