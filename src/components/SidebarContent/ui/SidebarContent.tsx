import { SectionWrapper } from "@src/components/SectionWrapper";
import { ButtonLogin } from "@src/components/ButtonLogin";
import { List } from "./List";
import {
  bestList,
  browseChannel,
  homeList,
  libList,
  moreFrom,
  moreFrom2,
} from "../model/lists";
import { SectionHeading } from "./SectionHeading";
import { SidebarFooter } from "./SidebarFooter";

export const SidebarContent = () => {
  return (
    <>
      <SectionWrapper>
        <List items={homeList} />
      </SectionWrapper>
      <SectionWrapper>
        <List items={libList} />
      </SectionWrapper>
      <SectionWrapper className="px-8 py-4 font-medium leading-5 border-b">
        <span className="text-sm">
          Sign in to like videos, comment, and subscribe.
        </span>
        <ButtonLogin className="py-0.5 mt-3" />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading label="Best of YouTube" />
        <List items={bestList} rounded />
      </SectionWrapper>
      <SectionWrapper>
        <List items={browseChannel} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading label="More from YouTube" />
        <List items={moreFrom} />
      </SectionWrapper>
      <SectionWrapper>
        <List items={moreFrom2} />
      </SectionWrapper>
      <SidebarFooter />
    </>
  );
};
