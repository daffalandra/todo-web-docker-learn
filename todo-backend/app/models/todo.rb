class Todo < ApplicationRecord
  validates :title, presence: true, length: { minimum: 1, maximum: 255 }
  validates :completed, inclusion: { in: [true, false] }

  scope :completed, -> { where(completed: true) }
  scope :pending, -> { where(completed: false) }
end
