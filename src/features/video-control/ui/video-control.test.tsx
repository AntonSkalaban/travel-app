import { MutableRefObject } from "react";

import { fireEvent, render } from "@testing-library/react";

import { VideoControl } from "./videol-control";

jest.mock("./images/pause.svg", () => "svg");
jest.mock("./images/play.svg", () => "svg");

const mockVideoRef = {
  current: {
    play: jest.fn(),
    pause: jest.fn(),
  },
} as unknown as MutableRefObject<HTMLVideoElement | null>;

describe("VideoControl", () => {
  it("should render Play img when video is not playing", () => {
    const { getByTestId } = render(<VideoControl videoRef={mockVideoRef} />);

    const palayImage = getByTestId("play-image");
    expect(palayImage).toBeDefined();
  });

  it("should render Pause button when video is playing", () => {
    const { getByTestId, queryByTestId } = render(
      <VideoControl videoRef={mockVideoRef} />,
    );

    const videoButton = getByTestId("video-btn");

    fireEvent.click(videoButton);

    const pauseImage = getByTestId("pause-image");
    const palayImage = queryByTestId("play-image");

    expect(palayImage).toBeNull();
    expect(pauseImage).toBeDefined();
  });
});
