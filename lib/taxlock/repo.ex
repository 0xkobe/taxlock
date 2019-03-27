defmodule Taxlock.Repo do
  use Ecto.Repo,
    otp_app: :taxlock,
    adapter: Ecto.Adapters.Postgres
end
