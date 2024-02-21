/* eslint-disable no-undef */
import { render, fireEvent, waitFor } from "@testing-library/react";

import * as authApi from "../js/api/auth/loginUser.js";
import LogInModalForm from "../js/components/modal/loginmodal/LoginModalForm";

jest.mock("../js/api/auth/loginUser.js", () => ({
  loginUser: jest.fn(),
}));

describe("LogInModalForm", () => {
  test("allows the user to log in successfully", async () => {
    authApi.loginUser.mockResolvedValue({
      name: "John Doe",
      email: "john@stud.noroff.no",
      avatar: "avatar_url",
      accessToken: "fake_access_token",
      venueManager: false,
    });

    const { getByLabelText, getByRole } = render(<LogInModalForm />);

    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "john@stud.noroff.no" },
    });
    fireEvent.change(getByLabelText(/password/i), {
      target: { value: "password" },
    });

    await waitFor(() =>
      fireEvent.click(getByRole("button", { name: /log inn/i })),
    );

    expect(authApi.loginUser).toHaveBeenCalledWith({
      email: "john@std.noroff.no",
      password: "password",
    });

    expect(authApi.loginUser).toHaveBeenCalledTimes(1);
  });
});
